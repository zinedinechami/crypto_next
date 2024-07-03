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

  // todo: create pagination prev and next

  return (
    <>
      <section className="pb-20   mx-auto">
        <h1 className="text-xl mb-6 text-gray-100 font-semibold">
          Cryptocurrency Prices by Market Cap
        </h1>
        {TableData && (
          <div className="rounded-lg overflow-hidden border border-zinc-800">
            <table className="w-full  bg-zinc-950  border-zinc-800 rounded-lg">
              <thead className="text-gray-400   border-b border-zinc-800 rounded-lg text-sm  ">
                <tr className="">
                  <th>#</th>
                  <th className="py-3 text-left">Name</th>
                  <th>Price</th>

                  <th>Change % 24h</th>

                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody className="rounded-md text-center text-sm ">
                {TableData.map((data, index) => {
                  return (
                    <>
                      <tr className="hover:bg-zinc-900 transition-colors border-b border-zinc-800">
                        <td>{index + 1}</td>
                        <a href={"/coins/" + data?.id}>
                          <td className="py-5 flex text-center">
                            <Image
                              src={data?.image}
                              width={35}
                              height={35}
                              alt={data?.id}
                            />{" "}
                            <div className="mt-2 ml-3 ">{data?.name}</div>
                            <p className="text-sm py-1 bg-zinc-50 text-zinc-950 font-bold text-center rounded-lg my-1 px-6 ml-4 uppercase">
                              {data?.symbol}
                            </p>
                          </td>
                        </a>

                        <td>${data?.current_price}</td>

                        <td>{data?.market_cap_change_percentage_24h}</td>

                        <td>${data?.market_cap}</td>
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
