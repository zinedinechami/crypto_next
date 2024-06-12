export default function CoinsTable() {
  return (
    <>
      <section className="pb-20">
        <h1 className="text-2xl mb-6 text-gray-100 font-medium">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="rounded-lg overflow-hidden border border-gray-900">
          <table className="w-full  bg-gray-950  border-gray-900 rounded-lg">
            <thead className="text-gray-400 border-b border-gray-800 rounded-lg text-sm bg-gray-900">
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
