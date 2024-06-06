export default function Header() {
  return (
    <>
      <nav className="w-full flex h-16  border-gray-900 border-b sticky top-0 z-50  backdrop-blur-md">
        <div className="mt-4 ml-10 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=" w-6 h-7 mr-2 text-blue-500"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>

          <h1 className=" font-bold text-xl text-gray-300">CoinsWatch</h1>
        </div>
        <div className="absolute right-10 top-4">
          <input
            className="h-8 rounded mr-6 bg-gray-900 border border-gray-800"
            type="text"
          />

          <button className="px-4 py-1 bg-blue-500  text-sm font-bold text-gray-50 rounded">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
