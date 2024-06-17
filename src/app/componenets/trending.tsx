"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Trending() {
  const [TrendingData, setTrendingData] = useState();

  const api_url = "https://api.coingecko.com/api/v3/search/trending";

  const getTrendingData = async () => {
    //explain try and catch, await and async
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

  const TrendingCoins = TrendingData?.coins.splice(1, 4);

  //create a variable that reduces length of numbers in trending

  console.log(TrendingCoins);

  // add texte overflow hidden

  return (
    <>
      {TrendingData && (
        <section className="pt-6 pb-6  mx-auto">
          <h1 className="text-2xl mb-6 font-medium text-gray-100 ">
            Top Trending Coins
          </h1>
          <div className="flex flex-wrap justify-between w-full">
            {TrendingCoins.map((data) => {
              return (
                <>
                  <a key={data?.item.id} href="">
                    <article className="w-80   mb-4 flex rounded-lg border border-gray-900 bg-gray-950 hover:bg-gray-900/50 transition-colors">
                      <div className="m-4 flex">
                        <div className="w-16 h-16 mt-1 rounded-full bg-white ">
                          <Image
                            src={data?.item.large}
                            width={100}
                            height={50}
                            quality={100}
                            alt={data?.item.name}
                            className="rounded-full border border-gray-400 "
                          />
                        </div>
                        <div className="ml-4 mt-1">
                          <p className="font-bold w-20 h-6 overflow-hidden text-center ">
                            {data?.item.name}
                          </p>
                          <p className="text-sm py-1 bg-gray-900 border border-gray-800 text-center rounded-lg my-1">
                            {data?.item.symbol}
                          </p>
                        </div>
                        <div className="mt-2 ml-4">
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
