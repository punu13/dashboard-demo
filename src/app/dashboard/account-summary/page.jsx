import React from "react";
import { accounts, stats, transactions } from "../../../../data/data";
import StatsComponent from "@/components/cards/StatsComponent";
const AccountSummary = () => {
  return (
    <main className="min-h-screen px-5 md:p-10 grid grid-cols-1 gap-10">
      <div className="gap-10 grid md:grid-cols-2 grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stats.map((item, index) => (
            <StatsComponent item={item} key={index} />
          ))}
        </div>
        <AccBalanceComponent />
      </div>
      <TransactionsComponent />
    </main>
  );
};

// will these be re-usable?

const AccBalanceComponent = () => {
  return (
    <>
      <div className="flex flex-col  px-5 bg-contrast shadow-md rounded-xl py-4">
        <h3 className="font-bold text-gray-500">Account Balance</h3>
        <div className="overflow-x-auto mt-5 px-2 table gap-10 w-full">
          <div className="table-row mb-3 font-bold">
            <h3 className="table-cell pb-5 text-left">Type</h3>
            <h3 className="table-cell pb-5 text-left">Company</h3>
            <h3 className="table-cell pb-5 text-left">Currency</h3>
            <h3 className="table-cell pb-5 text-left">Amount</h3>
          </div>
          <div className="table-row-group ">
            {accounts.map((items, index) => {
              return (
                <div key={index} className="table-row">
                  <div className="table-cell pb-3">
                    <items.ctype className="w-5 h-5 " />
                  </div>
                  <h3 className="table-cell pb-3">{items.company}</h3>
                  <h3 className="table-cell pb-3">{items.currency}</h3>
                  <h3 className="table-cell pb-3">{items.amount}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TransactionsComponent = () => {
  return (
    <>
      <div className="flex flex-col px-5 bg-contrast shadow-md rounded-xl py-5">
        <h3 className="font-bold text-gray-500 mb-5">Recent Transactions</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {transactions.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex justify-between items-end border px-5 py-3 rounded-md"
                >
                  <div>
                    <h2 className="text-xs text-gray-400">12th April 2023</h2>
                    <h3 className="text-lg text-primary font-bold">
                      {items.company}
                    </h3>
                    <h2 className="text-gray-500 text-sm">{items.flow}</h2>
                  </div>
                  <div>
                    <items.ctype className="float-right mb-1 h-6 w-6" />
                    <h3
                      className={`font-semibold ${
                        items.increase ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {items.amount}
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccountSummary;
