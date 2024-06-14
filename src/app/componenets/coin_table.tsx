"use client";

import { useEffect, useState } from "react";

export default function CoinsTable() {
  const [TableData, setTableData] = useState();

  const api_url = "https://api.coingecko.com/api/v3/coins/list";

  const getTableData = async () => {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (response) {
        const data = await response.json();
        if (data) setTableData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  // todo: create pagination variable and fonction, and componenet

  return (
    <>
      <section className="pb-20">
        <h1 className="text-2xl mb-6 text-gray-100 font-medium">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="rounded-lg overflow-hidden border border-gray-900">
          <table className="w-full  bg-gray-950  border-gray-900 rounded-lg">
            <thead className="text-gray-200 font-bold border-b border-gray-800 rounded-lg text-sm ">
              <tr className="">
                <th>#</th>
                <th className="py-3">NAME</th>
                <th>PRICE</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>MARKET CAP</th>
              </tr>
            </thead>
            <tbody className="rounded-md text-center text-sm font-bold">
              <tr className="hover:bg-gray-900/50 transition-colors border-b border-gray-900">
                <td>1</td>
                <td className="py-6">Name</td>
                <td>Price</td>
                <td>1h %</td>
                <td>24h %</td>
                <td>7d %</td>
                <td>Market Cap</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors border-b border-gray-900">
                <td>1</td>
                <td className="py-6">Name</td>
                <td>Price</td>
                <td>1h %</td>
                <td>24h %</td>
                <td>7d %</td>
                <td>Market Cap</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors  border-b border-gray-900">
                <td>1</td>
                <td className="py-6">Name</td>
                <td>Price</td>
                <td>1h %</td>
                <td>24h %</td>
                <td>7d %</td>
                <td>Market Cap</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors border-b border-gray-900">
                <td>1</td>
                <td className="py-6">Name</td>
                <td>Price</td>
                <td>1h %</td>
                <td>24h %</td>
                <td>7d %</td>
                <td>Market Cap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
