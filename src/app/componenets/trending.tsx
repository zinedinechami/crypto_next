"use client";

import { useEffect, useState } from "react";
import { TrendingCoin } from "../config/api";

export default function Trending() {
  const [TrendingData, setTrendingData] = useState("");

  useEffect(() => {
    fetch(TrendingCoin, {
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
          <article className="w-80 h-24 mb-2  rounded-md border border-gray-900 bg-gray-950"></article>
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
