"use client";

import { useEffect, useState } from "react";
import { TrendingCoin } from "../config/api";

export default function Trending() {
  const [TrendingData, setTrendingData] = useState("");

  const api_url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

  useEffect(() => {
    fetch(api_url, {
      method: "GET",
      headers: { accept: "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTrendingData(data.body);
      });
  });

  // i need to do splice with the trending data, ex only show coins from 4 to 10, than passe through data in componenet

  // do a map with the article, find a way to only show the 6 first in the trending list

  return (
    <>
      <section className="pt-6 pb-6 ">
        <h1 className="text-base mb-4 text-gray-300 ">Trending Coins</h1>
        <div className="flex flex-wrap justify-between w-full">
          <article className="w-80 h-24 mb-2 flex rounded-md border border-gray-900 bg-gray-950 hover:bg-gray-900/50 transition-colors">
            <div className="m-4 flex">
              <div className="w-16 h-16 rounded-lg bg-white "></div>
              <div className="ml-4">
                <p>Bitcoin</p>
                <p className="text-sm p-1 bg-gray-800 text-center rounded-lg my-1">
                  BTC
                </p>
              </div>
              <div className="ml-8 mt-1 ">
                {/* price */}
                <p className="">69544 $</p>
                <p className="text-sm text-gray-400">-5.81936 %</p>
              </div>
            </div>
          </article>
          <article className="w-80 h-24 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mr-10 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mb-4  rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 rounded-md border border-gray-900 bg-gray-950"></article>
          <article className="w-80 h-24 mr-10 rounded-md border border-gray-900 bg-gray-950"></article>
        </div>
      </section>
    </>
  );
}
