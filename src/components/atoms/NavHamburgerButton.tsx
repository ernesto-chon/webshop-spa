interface HamburgerProps {
  onOpenMenu: () => void;
  openMenu: boolean;
}

export default function NavHamburgerMenu({ onOpenMenu, openMenu }: HamburgerProps) {
  const toggleIcon = () => {
    onOpenMenu();
  };

  return (
    <div className="flex items-center md:hidden">
      <button onClick={toggleIcon} className="text-black hover:text-primary focus:outline-none">
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          {openMenu ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
    </div>
  );
}
