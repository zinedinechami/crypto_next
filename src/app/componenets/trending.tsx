"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Trending() {
  const [TrendingData, setTrendingData] = useState();

  const api_url = "https://api.coingecko.com/api/v3/search/trending";

  const getTrendingData = async () => {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (response) {
        const data = await response.json();
        if (data) setTrendingData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, []);

  const TrendingCoins = TrendingData?.coins.splice(1, 6);

  console.log(TrendingCoins);

  // add texte overflow hidden

  return (
    <>
      {TrendingData && (
        <section className="pt-4 pb-6 ">
          <h1 className="text-base mb-4 text-gray-300 ">Trending Coins</h1>
          <div className="flex flex-wrap justify-between w-full">
            {TrendingCoins.map((data) => {
              return (
                <>
                  <a key={data?.item.id} href="">
                    <article className="w-80 h-30  mb-4 flex rounded-md border border-gray-900 bg-gray-950 hover:bg-gray-900/50 transition-colors">
                      <div className="m-4 flex">
                        <div className="w-16 h-16 rounded-full bg-white ">
                          <Image
                            src={data?.item.thumb}
                            width={100}
                            height={50}
                            quality={100}
                            alt={data?.item.name}
                            className="rounded-full border "
                          />
                        </div>
                        <div className="ml-6">
                          <p className="font-bold w-16 h-6 overflow-hidden ">
                            {data?.item.name}
                          </p>
                          <p className="text-sm p-1 bg-gray-800 text-center rounded-lg my-1">
                            {data?.item.symbol}
                          </p>
                        </div>
                        <div className="mt-2 ml-7">
                          {/* price */}
                          <p className=" w-24 overflow-hidden h-8">
                            ${data?.item.data.price}
                          </p>
                          <p className="text-xs text-gray-400 w-20 overflow-hidden h-8">
                            {data?.item.data.price_change_percentage_24h.usd}
                          </p>
                        </div>
                      </div>
                    </article>
                  </a>
                </>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
