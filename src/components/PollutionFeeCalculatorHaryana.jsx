import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const NocFeeCalculatorHaryana = () => {
  const [form, setForm] = useState({
    type: "CTE",
    years: 1,
    category: "Red",
    investment: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const calculateFee = () => {
    const inv = parseFloat(form.investment) / 100;
    if (isNaN(inv)) {
      alert("Please enter a valid investment amount.");
      return;
    }

    const slabs = {
      Red: [105000, 60000, 36000, 24000, 17700, 14500, 7500, 4500, 2250, 600],
      Orange: [35000, 20000, 12000, 8000, 5700, 4500, 2500, 1500, 750, 200],
      Green: [35000, 20000, 12000, 8000, 5700, 4500, 2500, 1500, 750, 200],
    };

    const securitySlabs = {
      Red: [25000, 50000, 100000, 200000, 300000, 400000, 500000],
      Orange: [12500, 25000, 75000, 150000, 200000, 250000, 300000],
      Green: [5000, 10000, 25000, 50000, 100000, 125000, 150000],
    };

    const index = (i) => {
      if (i > 100) return 0;
      if (i > 50) return 1;
      if (i > 10) return 2;
      if (i > 3) return 3;
      if (i > 1) return 4;
      if (i > 0.5) return 5;
      if (i > 0.25) return 6;
      if (i > 0.1) return 7;
      if (i > 0.02) return 8;
      return 9;
    };

    const securityIndex = (i) => {
      if (i <= 0.5) return 0;
      if (i <= 1) return 1;
      if (i <= 5) return 2;
      if (i <= 10) return 3;
      if (i <= 50) return 4;
      if (i <= 100) return 5;
      return 6;
    };

    const years = form.type === "CTO" ? parseInt(form.years) || 1 : 1;

    const fee = slabs[form.category][index(inv)] * years;
    const security = securitySlabs[form.category][securityIndex(inv)];

    setResult({ ...form, fee, security });
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
      <h2 className="md:text-3xl text-xl font-bold text-purple-600 text-center md:mb-10 mb-5  ">
        Haryana Pollution NOC Fee Calculator
      </h2>

      {/* Form */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
        {/* Type */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-purple-600 mb-1">
            Type
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          >
            <option value="CTE">CTE</option>
            <option value="CTO">CTO</option>
          </select>
        </div>

        {/* Years */}
        {form.type === "CTO" && (
          <div>
            <label className="block text-xs md:text-sm font-semibold text-purple-600 mb-1">
              Years
            </label>
            <input
              type="number"
              name="years"
              value={form.years}
              onChange={handleChange}
              min="1"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}

        {/* Category */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-purple-600 mb-1">
            Industry Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          >
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {/* Investment */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-purple-600 mb-1">
            Capital Investment (in lakhs)
          </label>
          <input
            type="number"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g., 1250"
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={calculateFee}
        className="md:mt-10 mt-4 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all"
      >
        Calculate Fee
      </button>

      {result && (
  <div className="mt-6 w-full      ">
    {/* Title */}
    <div className="flex items-center text-purple-600 text-xl font-semibold mb-6">
      <FaCheckCircle className="mr-2 text-purple-600" />
      Result Summary
    </div>

    {/* Fee Breakdown */}
    <div className="grid grid-cols-1 gap-4 text-black text-base font-medium">
      {/* Performance Security */}
      <div className="flex  w-full justify-between">
        <span className="text-gray-600 mb-1">Performance Security</span>
        <span className="">
          ₹{result.security.toLocaleString()}
        </span>
      </div>

      {/* Government Fee (Approx.) */}
      <div className="flex  w-full justify-between">
        <span className="text-gray-600 mb-1">Government Fee (Approx.)</span>
        <span className="">
          ₹{result.fee.toLocaleString()}
        </span>
      </div>

      {/* Total Fee */}
      <div className="flex  w-full justify-between">
        <span className="text-gray-600 mb-1">Total Estimated Fee</span>
        <span className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow text-lg font-bold">
          ₹{(result.security + result.fee).toLocaleString()}
        </span>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default NocFeeCalculatorHaryana;
