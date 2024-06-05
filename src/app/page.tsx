import Image from "next/image";
import Header from "./componenets/header";

export default function Home() {
  return (
    <main className="bg-gray-950">
      <Header />
      <div className="w-9/12 mx-auto">
        <div>Home</div>
      </div>
    </main>
  );
}
