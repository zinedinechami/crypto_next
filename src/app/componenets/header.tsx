export default function Header() {
  // add heart svg to watchlist

  return (
    <>
      <nav className="w-full flex h-16  border-gray-900 border-b sticky top-0 z-50  backdrop-blur-lg">
        <div className="mt-4 ml-12 flex">
          <h1 className=" font-bold text-xl text-gray-50">CoinWatch</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-7 ml-1 text-blue-500"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute right-10 top-4">
          <input
            className="h-8 w-64 rounded mr-2 pl-2 text-sm bg-gray-900 border border-gray-800"
            type="text"
            placeholder="Search (Ctrl+K)"
          />

          <button className="px-2 h-8 bg-blue-600 hover:bg-blue-500 transition-colors  text-sm font-bold text-gray-50 rounded">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
