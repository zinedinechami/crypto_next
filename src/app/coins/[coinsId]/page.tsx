"use client";

import Header from "@/app/componenets/header";
import { useEffect, useState } from "react";

//todo: create graph

export default function Page({ params }: { params: { coinsId: string } }) {
  const [coinsData, setCoinsData] = useState();

  const id = params.coinsId;
  const api_url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&developer_data=false`;

  console.log(id);

  console.log(api_url);

  const getCoinsData = async () => {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (response) {
        const data = await response.json();
        if (data) setCoinsData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(coinsData);

  useEffect(() => {
    getCoinsData();
  });

  //add market cap, volume 24h, total suplly, max supply
  return (
    <>
      {coinsData && (
        <body className="  text-zinc-100 bg-gradient-to-br from-zinc-950 to-zinc-900 z-0">
          <Header />

          <section className="flex w-11/12  mx-auto mt-10 ">
            <div className="w-1/3 p-6 border-zinc-800 border h-96 rounded-lg bg-zinc-950">
              <h1>
                # {coinsData?.market_cap_rank} {coinsData?.name}
              </h1>

              <h1 className="text-3xl font-bold">$219992992</h1>
              <p>Market Cap: {coinsData?.market_data.max_supply}</p>
              <p>Volume 24H: {coinsData?.market_data.max_supply}</p>
              <p>Total Supply: {coinsData?.market_data.max_supply}</p>
            </div>

            <div className="w-1/2  mx-auto    h-96  mb-20 "></div>
          </section>
        </body>
      )}
    </>
  );
}
