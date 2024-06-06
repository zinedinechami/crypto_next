export default function Trending() {
  return (
    <>
      <section className="pt-6 pb-6 ">
        <h1 className="text-base mb-4 text-gray-300 ">Trending Coins</h1>
        <div className="flex flex-wrap justify-between w-full">
          <article className="w-80 h-24 mb-2  rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mr-10 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mb-4  rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mr-10 rounded-md border border-gray-900 bg-gray-950"></article>
        </div>
      </section>
    </>
  );
}
