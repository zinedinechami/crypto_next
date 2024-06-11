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
        <section className="pt-4 pb-6 pl-3 ">
          <h1 className="text-base mb-4 text-gray-300 ">Trending Coins</h1>
          <div className="flex flex-wrap justify-between w-full">
            {TrendingCoins.map((data) => {
              return (
                <>
                  <a key={data?.item.coin_id} href="">
                    <article className="w-72 h-32 pt-3 mb-4 flex rounded-md border border-gray-900 bg-gray-950 hover:bg-gray-900/50 transition-colors">
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
                          <p className="font-bold w-16 overflow-hidden ">
                            {data?.item.name}
                          </p>
                          <p className="text-sm p-1 bg-gray-800 text-center rounded-lg my-1">
                            {data?.item.symbol}
                          </p>
                        </div>
                        <div className="mt-2 ml-4">
                          {/* price */}
                          <p className="">$69544</p>
                          <p className="text-xs text-gray-400">-5.81936 %</p>
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
