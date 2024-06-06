import Image from "next/image";
import Header from "./componenets/header";
import Trending from "./componenets/trending";
import CoinsTable from "./componenets/coin_table";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-950 to-gray-900">
      <Header />
      <div className="w-8/12  mx-auto">
        <Trending />
        <CoinsTable />
      </div>
    </main>
  );
}
