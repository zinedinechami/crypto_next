export default function Header() {
  return (
    <>
      <nav className="w-full flex h-16  border-gray-900 border-b relative">
        <h1 className="mt-4 ml-20 font-medium text-2xl text-gray-200">
          CoinsWatch
        </h1>
        <div className="absolute right-20 top-4">
          <input
            className="h-8 rounded mr-6 bg-gray-900 border border-gray-800"
            type="text"
          />

          <button className="px-4 py-1 bg-gray-200 border border-gray-400 text-sm font-bold text-gray-950 rounded">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
