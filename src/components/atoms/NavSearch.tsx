import { shallow } from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';

import { SearchInterface, useSearchStore } from '@/store/searchStore';

import SearchIcon from '@/assets/icons/search.svg?react';
import { useState } from 'react';

export default function NavSearch() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchDetails] = useSearchStore((state) => [state.searchDetails, state.setSearchDetails], shallow);
  const [searchInput, setSearchInput] = useState('');

  return (
    <form
      className="hidden w-full max-w-[25rem] rounded border bg-white md:flex md:max-w-[45rem]"
      onSubmit={(e) => {
        e.preventDefault();
        const newSearch: SearchInterface = {
          input: searchInput,
        };
        setSearchDetails(newSearch);
        navigate('/search');
      }}
    >
      <input
        id="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="font-color-black h-12 grow px-5 focus:outline-none"
        placeholder="What are you looking for..."
      ></input>
      <button
        className="d-btn h-10 w-20 rounded-none fill-primary transition-colors !duration-300 hover:bg-primary hover:fill-white"
        type="submit"
      >
        <SearchIcon height="20px" />
      </button>
    </form>
  );
}
