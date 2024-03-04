import SearchIcon from '@/assets/icons/search.svg?react';

export default function NavSearch() {
  return (
    <form className="hidden w-full max-w-[25rem] rounded border bg-white md:flex md:max-w-[45rem]">
      <input
        className="font-color-black h-12 grow px-5 focus:outline-none"
        placeholder="What are you searching..."
      ></input>
      <button className="d-btn h-10 w-20 rounded-none fill-primary transition-colors !duration-300 hover:bg-primary hover:fill-white">
        <SearchIcon height="20px" />
      </button>
    </form>
  );
}
