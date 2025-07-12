'use client';

import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Define HP ranges and worker ranges
const hpRanges = [
  'Nil',
  'Up to 50',
  'Above 50 But Not Above 100',
  'Above 100 But Not Above 500',
  'Above 500 But Not Above 1000',
  'Above 1000 But Not Above 2000',
  'Above 2000',
];

const workerRanges = [
  'Up to 50',
  '51 to 150',
  '151 to 250',
  '251 to 500',
  '501 to 1000',
  '1001 to 2500',
  'Above 2500',
];

// Fee slab table (same order as ranges above)
const feeTable = [
  [150, 700, 900, 1700, 3500, 6500, 10000],
  [600, 1800, 2800, 3700, 6800, 12500, 14600],
  [1200, 2700, 3600, 5700, 9000, 15000, 18000],
  [2500, 5500, 7200, 9600, 14400, 22000, 25000],
  [5000, 7500, 9400, 12000, 18000, 24500, 30000],
  [6000, 9500, 11500, 14000, 19000, 26500, 32000],
  [7000, 12500, 14500, 16500, 24000, 29000, 35000],
];

export default function FactoryLicenseCalculatorUP() {
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
        Uttar Pradesh Factory License Fee Calculator
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
            className="w-full border border-gray-300 rounded-xl p-1 text-sm focus:ring-2 focus:ring-purple-400"
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
            className="w-full border border-gray-300 rounded-xl p-1 text-sm focus:ring-2 focus:ring-purple-400"
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
