"use client";
import React from "react";

const feeData = [
  {
    hp: "Nil",
    values: [100, 200, 400, 1000, 1600, 3000, 4000, 5000],
  },
  {
    hp: "Up to 10",
    values: [200, 400, 480, 1200, 2400, 3600, 4800, 6000],
  },
  {
    hp: "Above 10 and up to 50",
    values: [400, 600, 800, 2000, 4000, 6000, 8000, 10000],
  },
  {
    hp: "Above 50 and up to 100",
    values: [800, 1000, 1200, 3000, 6000, 9000, 12000, 15000],
  },
  {
    hp: "Above 100",
    values: [1200, 1600, 2000, 4000, 8000, 12000, 16000, 20000],
  },
];

const workerHeaders = [
  "Up - 20",
  "21 - 50",
  "51 - 100",
  "101 - 250",
  "251 - 500",
  "501 - 750",
  "751 - 1000",
  "Above 1000",
];

export default function ResponsiveFeeTable() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[1000px] border-collapse w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="border px-4 py-2 whitespace-nowrap text-center">H.P. Installed</th>
            {workerHeaders.map((header, idx) => (
              <th key={idx} className="border px-4 py-2 whitespace-nowrap text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {feeData.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">{row.hp}</td>
              {row.values.map((val, colIndex) => (
                <td key={colIndex} className="border px-4 py-2 text-center">
                  ₹{val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
