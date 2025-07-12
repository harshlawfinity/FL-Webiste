'use client';

import React, { useState } from 'react';

const hpOptions = {
  Industrial: [
    { label: 'Up to 5 H.P', hp: 5, regFee: 2000, licFee: 4000 },
    { label: '6 to 15 H.P', hp: 15, regFee: 4000, licFee: 8000 },
    { label: '16 to 50 H.P', hp: 50, regFee: 25000, licFee: 20000 },
    { label: 'Above 50 H.P', hp: 51, regFee: 50000, licFee: 40000 },
  ],
  Household: [
    { label: 'Up to 5 H.P', hp: 5, regFee: 2000, licFeeRate: 4000 },
    { label: '6 to 15 H.P', hp: 15, regFee: 4000, licFeeRate: 8000 },
  ],
};

const FactoryLicenseCalculatorDelhi = () => {
  const [unitType, setUnitType] = useState('');
  const [hpIndex, setHpIndex] = useState('');
  const [years, setYears] = useState(1);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!unitType || hpIndex === '') {
      setResult({ error: 'Please select unit type and HP.' });
      return;
    }

    const data = hpOptions[unitType][hpIndex];
    const regFee = data.regFee;
    const licFee = unitType === 'Industrial' ? data.licFee : 50 * data.hp;
    const procFee = 1000 * years;
    const unitCharge = 1000;
    let permFee = 0;

    if (unitType === 'Industrial') {
      permFee = unitCharge + data.hp;
    } else {
      const perHPFee = 50 * data.hp * years;
      permFee = perHPFee + 1000;
    }

    const total = regFee + licFee + procFee + permFee;
    const convFee = 0.025937 * total;
    const grandTotal = total + convFee;

    setResult({
      regFee,
      licFee,
      procFee,
      permFee,
      convFee,
      grandTotal,
    });
  };

  return (
    <div className=" ">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#7A3EF2]    mb-8">
        Factory License Fee Calculator (Delhi)
      </h2>

      {/* Form */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#7A3EF2] mb-1">
            Select Unit Type
          </label>
          <select
            value={unitType}
            onChange={(e) => {
              setUnitType(e.target.value);
              setHpIndex('');
              setResult(null);
            }}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select </option>
            <option value="Industrial">Industrial</option>
            <option value="Household">Household</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#7A3EF2] mb-1">
            Select Horsepower (HP)
          </label>
          <select
            value={hpIndex}
            onChange={(e) => setHpIndex(e.target.value)}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select HP </option>
            {unitType &&
              hpOptions[unitType].map((opt, index) => (
                <option key={index} value={index}>
                  {opt.label}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#7A3EF2] mb-1">
            Number of Years
          </label>
          <input
            type="number"
            min="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={calculate}
        className="mt-6 w-full py-1 rounded-xl bg-[#7A3EF2] text-white font-semibold hover:bg-purple-700 transition-all"
      >
        Calculate Fees
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 text-black text-base font-medium">
          {result.error ? (
            <div className="text-red-600 font-semibold">{result.error}</div>
          ) : (
            <div className="grid gap-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Registration Fee</span>
                <span>₹{result.regFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">License Fee</span>
                <span>₹{result.licFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee</span>
                <span>₹{result.procFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Permission Fee</span>
                <span>₹{result.permFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Convenience Fee (2.5937%)
                </span>
                <span>₹{result.convFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t mt-4">
                <span className="text-lg font-semibold text-gray-800">
                  Total Payable
                </span>
                <span className="bg-purple-700 text-white px-4 py-2 rounded-lg text-lg font-bold shadow">
                  ₹{result.grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FactoryLicenseCalculatorDelhi;
