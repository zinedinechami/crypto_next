import Header from "@/app/componenets/header";

export default function Page() {
  return (
    <>
      <body className="bg-zinc-950  text-zinc-100 z-0">
        <Header />
        <section className="flex w-11/12  mx-auto mt-10">
          <div className="w-1/3 p-6 border-zinc-800 border h-96 rounded-lg">
            <h1>#1 Bitcoin</h1>

            <h1 className="text-3xl font-bold">$219992992</h1>
          </div>

          <div className="w-1/2  mx-auto    h-96  mb-20 "></div>
        </section>
      </body>
    </>
  );
}
