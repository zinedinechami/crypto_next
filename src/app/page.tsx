import Image from "next/image";
import Header from "./componenets/header";
import Trending from "./componenets/trending";
import CoinsTable from "./componenets/coin_table";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-950  to-gray-800 text-zinc-100 z-0">
      <Header />
      <div className="w-11/12  mx-auto">
        <Trending />
        <CoinsTable />
      </div>
    </main>
  );
}
