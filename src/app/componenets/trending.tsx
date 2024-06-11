"use client";

import { useEffect, useState } from "react";

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

  // ? create a splice variable?

  return (
    <>
      {TrendingData && (
        <section className="pt-4 pb-6 pl-3 ">
          <h1 className="text-base mb-4 text-gray-300 ">Trending Coins</h1>
          <div className="flex flex-wrap justify-between w-full">
            <article className="w-72 h-24 mb-4 flex rounded-md border border-gray-900 bg-gray-950 hover:bg-gray-900/50 transition-colors">
              <div className="m-4 flex">
                <div className="w-16 h-16 rounded-full bg-white "></div>
                <div className="ml-6">
                  <p className="font-bold">Bitcoin</p>
                  <p className="text-sm p-1 bg-gray-800 text-center rounded-lg my-1">
                    BTC
                  </p>
                </div>
                <div className="mt-2 ml-4">
                  {/* price */}
                  <p className="">$69544</p>
                  <p className="text-xs text-gray-400">-5.81936 %</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}
    </>
  );
}
