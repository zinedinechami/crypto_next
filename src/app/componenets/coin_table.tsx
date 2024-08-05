"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// todo: create pagination prev and next

//todo: create type interface for state data

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

  return (
    <>
      <section className="pb-20   mx-auto">
        <h1 className="text-lg mb-6 text-zinc-300 ">
          CRYPTOCURRENCIES BY MARKET CAP
        </h1>
        {TableData && (
          <div className="rounded-xl overflow-hidden ">
            <table className="w-full bg-zinc-900/60   rounded-3xl ">
              <thead className="text-zinc-500    rounded-xl text-sm border-b border-zinc-900 ">
                <tr className="">
                  <th>#</th>
                  <th className="py-5 text-left">NAME</th>
                  <th>PRICE</th>

                  <th>CHANGE % 24h</th>

                  <th>MARKET CAP</th>
                </tr>
              </thead>
              <tbody className="rounded-xl text-center text-sm ">
                {TableData.map((data, index) => {
                  return (
                    <>
                      <tr className="hover:bg-zinc-900 transition-colors ">
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
                            <p className="text-sm   text-zinc-500 font-black text-center rounded-lg  ml-2 mt-2 uppercase">
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
