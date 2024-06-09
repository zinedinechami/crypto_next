export default function Header() {
  // add heart svg to watchlist

  return (
    <>
      <nav className="w-full flex h-16  border-gray-950  sticky top-0 z-50  backdrop-blur-lg">
        <div className="mt-4 ml-12 flex">
          <h1 className=" font-bold text-xl text-gray-50">CoinWatch</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-7 ml-1 text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="absolute right-10 top-4">
          <a href="" className="mr-6  text-sm">
            Watchlist
          </a>

          <input
            className="h-8 rounded mr-2 pl-2 text-sm bg-gray-900 border border-gray-800"
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
