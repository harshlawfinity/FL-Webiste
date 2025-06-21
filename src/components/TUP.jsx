"use client";
import React from "react";
const workerHeaders = [
  "Up - 50 ",
  "51 - 150 ",
  "151 - 250 ",
  "251 - 500 ",
  "501 - 1000 ",
  "1001 - 2500 ",
  "Above 2500 ",
];

const feeData = [
  {
    hp: "Without HP",
    values: [150, 700, 900, 1700, 3500, 6500, 10000],
  },
  {
    hp: "Up to 50",
    values: [600, 1800, 2800, 3700, 6800, 12500, 14600],
  },
  {
    hp: "Above 50 Up to 100",
    values: [1200, 2700, 3600, 5700, 9000, 15000, 18000],
  },
  {
    hp: "Above 100 Up to 500",
    values: [2500, 5500, 7200, 9600, 14400, 22000, 25000],
  },
  {
    hp: "Above 500 Up to 1000",
    values: [5000, 7500, 9400, 12000, 18000, 245000, 30000],
  },
  {
    hp: "Above 1000 Up to 2000",
    values: [6000, 9500, 11500, 14000, 19000, 26500, 32000],
  },
  {
    hp: "Above 2000",
    values: [7000, 12500, 14500, 16500, 24000, 29000, 35000],
  },
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
