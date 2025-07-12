'use client';

import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const hpRanges = [
  'Without Horse Power',
  'Up to 10',
  'Above 10 - Up to 50',
  'Above 50 - Up to 100',
  'Above 100 - Up to 500',
  'Above 500 - Up to 1000',
  'Above 1000 - Up to 2000',
  'Above 2000',
];

const workerRanges = [
  'Up to 20',
  '21 to 40',
  '41 to 150',
  '151 to 250',
  '251 to 500',
  '501 to 1000',
  '1001 to 2000',
  '2001 to 3000',
  '3001 & above',
];

// Fee slab table
const feeTable = [
  [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500],
  [3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000],
  [4500, 9000, 13500, 18000, 22500, 27000, 31500, 36000, 40500],
  [6000, 12000, 18000, 24000, 30000, 36000, 42000, 48000, 54000],
  [7500, 15000, 22500, 30000, 37500, 45000, 52500, 60000, 67500],
  [9000, 18000, 27000, 36000, 45000, 54000, 63000, 72000, 81000],
  [10500, 21000, 31500, 42000, 52500, 63000, 73500, 84000, 94500],
  [12000, 24000, 36000, 48000, 60000, 72000, 84000, 96000, 108000],
];

export default function FactoryLicenseCalculatorHaryana() {
  const [form, setForm] = useState({
    hpIndex: '',
    workerIndex: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const calculateFee = () => {
    const { hpIndex, workerIndex } = form;

    if (hpIndex === '' || workerIndex === '') {
      alert('Please select both Installed Power and Number of Workers');
      return;
    }

    const fee = feeTable[hpIndex][workerIndex];
    setResult({ fee });
  };

  return (
    <div className=" ">
      <h2 className="text-xl md:text-3xl font-semibold text-purple-600 text- center mb-4">
        Haryana Factory License Fee Calculator
      </h2>

      {/* Form */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-black">
        {/* Horse Power */}
        <div>
          <label className="block text-sm font-semibold text-purple-600 mb-1">
            Installed Power (in H.P.)
          </label>
          <select
            name="hpIndex"
            value={form.hpIndex}
            onChange={handleChange}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value=""> Select Installed Power </option>
            {hpRanges.map((label, index) => (
              <option key={index} value={index}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Workers */}
        <div>
          <label className="block text-sm font-semibold text-purple-600 mb-1">
            Number of Workers
          </label>
          <select
            name="workerIndex"
            value={form.workerIndex}
            onChange={handleChange}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value=""> Select Worker Count </option>
            {workerRanges.map((label, index) => (
              <option key={index} value={index}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={calculateFee}
        className="mt-6 w-full py-1 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all text-base"
      >
        Calculate Fees
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8">
          <div className="flex items-center text-purple-600 text-xl font-semibold mb-4">
            <FaCheckCircle className="mr-2" />
            Total Payable Fee
          </div>

          <div className="flex justify-between items-center p-4 bg-purple-50 border border-purple-200 rounded-xl shadow-sm">
            <span className="text-lg font-medium text-gray-800">Government License Fee</span>
            <span className="bg-purple-700 text-white px-4 py-2 rounded-lg text-lg font-bold shadow">
              ₹{result.fee.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
