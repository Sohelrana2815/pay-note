const Navbar = () => {
  return (
    <header className="w-full">
      {/* /* 2. Constrained, centered content container  */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo part */}
        <div className="flex items-center gap-2">
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          {/* Name part */}
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            PayNote
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle button */}
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
              />
            </svg>
          </span>
          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-100 transition-colors focus:outline-none dark:bg-blue-600">
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 dark:translate-x-6" />
          </button>
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
