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

  //todo: create graph by doing api call

  //todo: add link to buy crypto from atrusted website, create buy button component

  const history_api = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`;

  const [historyData, setHistoryData] = useState();

  const getHistoryData = async () => {
    try {
      const response = await fetch(history_api, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (response) {
        const data = await response.json();
        if (data) setHistoryData(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getHistoryData();
  });
  //add market cap, volume 24h, total suplly, max supply
  return (
    <>
      <body className="  text-zinc-100 bg-zinc-950 z-0">
        <Header />

        <section className="flex flex-col w-9/12  mx-auto mt-10 ">
          {coinsData && (
            <div className="w-full p-6   rounded-3xl bg-zinc-900/60 ">
              <div className="flex flex-row  space-x-10">
                <h1>
                  # {coinsData?.market_cap_rank} {coinsData?.name}
                </h1>

                <h1 className="text-3xl font-bold">$219992992</h1>

                <ul className="mt-2 flex space-x-5 ml-10">
                  <li>Market Cap: {coinsData?.market_data.max_supply}</li>
                  <li>Volume 24H: {coinsData?.market_data.max_supply}</li>
                  <li>Total Supply: {coinsData?.market_data.max_supply}</li>
                </ul>
              </div>
            </div>
          )}
          <div className="w-full  rounded-3xl bg-zinc-900/60 mx-auto    h-96  mb-20 mt-6 "></div>
        </section>
      </body>
    </>
  );
}
