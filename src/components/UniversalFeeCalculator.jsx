"use client";

import React, { useState } from "react";
import stateConfigs from "./stateConfigs.js";
import { FaCheckCircle } from "react-icons/fa";

const UniversalNocFeeCalculator = () => {
  const [selectedState, setSelectedState] = useState("Haryana");
  const [form, setForm] = useState({
    type: "CTE",
    years: 1,
    category: "Red",
    investment: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const stateConfig = stateConfigs[selectedState];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "investment" ? value.replace(/,/g, "") : value,
    }));
    setError(null);
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const config = stateConfigs[newState];
    setForm({
      type: config.types[0],
      years: 1,
      category: config.categories[0],
      investment: "",
    });
    setResult(null);
    setError(null);
  };

  const calculateFee = () => {
    const inv = parseFloat(form.investment);
    if (isNaN(inv) || inv <= 0) {
      setError("Please enter a valid investment amount.");
      setResult(null);
      return;
    }
    const res = stateConfig.calculateFee(form);
    setResult({ ...form, ...res });
    setError(null);
  };

  const isFormValid = form.investment && !isNaN(form.investment) && parseFloat(form.investment) > 0;

  return (
    <div className="max-w-5xl mx-auto p-8 my- bg-white rounded-3xl shadow">
      <h2 className="md:text-3xl text-2xl font-bold text-purple-600 text-center mb-10">
        Pollution NOC Fee Calculator
      </h2>

      {/* State Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-purple-600 mb-1">
          Select State
        </label>
        <select
          value={selectedState}
          onChange={handleStateChange}
          className="w-full p-3 rounded-xl border text-black border-gray-300 focus:ring-2 focus:ring-purple-400"
        >
          {Object.keys(stateConfigs).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* Dynamic Form */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black mb-6">
        <div>
          <label className="text-sm font-semibold text-purple-600 block mb-1">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            {stateConfig.types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {form.type === "CTO" && (
          <div>
            <label className="text-sm font-semibold text-purple-600 block mb-1">Years</label>
            <input
              type="number"
              name="years"
              min="1"
              value={form.years}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}

        <div>
          <label className="text-sm font-semibold text-purple-600 block mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            {stateConfig.categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-purple-600 block mb-1">
            Investment (in lakhs)
          </label>
          <input
            type="text"
            name="investment"
            value={Number(form.investment || 0).toLocaleString()}
            onChange={handleChange}
            placeholder="e.g., 100"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-600 mb-4 text-sm font-medium">
          {error}
        </div>
      )}

      <button
        onClick={calculateFee}
        disabled={!isFormValid}
        className={`w-full py-3 rounded-xl font-semibold text-white 
          ${isFormValid ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 cursor-not-allowed'}`}
      >
        Calculate Fee
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 border-t pt-6">
          <div className="flex items-center text-purple-600 text-lg font-semibold mb-6">
            <FaCheckCircle className="mr-2" /> Result Summary
          </div>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span className="text-black">Govt. Fee</span>
              <span className="bg-purple-600 text-white px-5 py-1 rounded-lg shadow">
                ₹{(result.fee || 0).toLocaleString()}
              </span>
            </div>
            {result.security && (
              <>
                <div className="flex justify-between">
                  <span className="text-black">Performance Security</span>
                  <span className="bg-purple-600 px-4 py-1 rounded text-white">
                    ₹{result.security.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-black">Total</span>
                  <span className="bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
                    ₹{result.total.toLocaleString()}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversalNocFeeCalculator;
