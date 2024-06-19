"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CoinsTable() {
  const [TableData, setTableData] = useState();

  const api_url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100";

  const getTableData = async () => {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (response) {
        const data = await response.json();
        if (data) setTableData(data);

        setTableData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(TableData);

  useEffect(() => {
    getTableData();
  }, []);

  // todo: create pagination variable and fonction, and componenet

  return (
    <>
      <section className="pb-20   mx-auto">
        <h1 className="text-2xl mb-6 text-gray-100 font-medium">
          Cryptocurrency Prices by Market Cap
        </h1>
        {TableData && (
          <div className="rounded-lg overflow-hidden border border-gray-900">
            <table className="w-full  bg-gray-950  border-gray-900 rounded-lg">
              <thead className="text-gray-200 font-bold border-b border-gray-800 rounded-lg text-sm bg-gray-900/50 ">
                <tr className="">
                  <th>#</th>
                  <th className="py-3 text-left">Name</th>
                  <th>Price</th>
                  <th>1h %</th>
                  <th>24h %</th>
                  <th>7d %</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody className="rounded-md text-center text-sm ">
                {TableData.map((data, index) => {
                  return (
                    <>
                      <tr className="hover:bg-gray-900/50 transition-colors border-b border-gray-900">
                        <td>{index + 1}</td>
                        <td className="py-5 flex text-center">
                          <Image
                            src={data?.image}
                            width={35}
                            height={35}
                            alt={data?.id}
                          />{" "}
                          <div className="mt-2 ml-3 font-bold">
                            {data?.name}
                          </div>
                          <p className="text-sm py-1 bg-gray-900 border border-gray-800 text-center rounded-lg my-1 px-6 ml-4 uppercase">
                            {data?.symbol}
                          </p>
                        </td>
                        <td>Price</td>
                        <td>1h %</td>
                        <td>24h %</td>
                        <td>7d %</td>
                        <td>Market Cap</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
