import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const NocFeeDelhi = () => {
  const [form, setForm] = useState({
    type: "CTE",
    category: "Orange",
    investment: "",
    years: 1,
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const slabs = {
    Green: [100, 200, 400, 1000, 5000, 7500, 12500, 25000, 50000, 100000, 150000, 300000, 500000],
    Orange: [500, 1000, 1000, 2000, 10000, 15000, 25000, 50000, 100000, 300000, 600000, 1000000],
  };

  const ctoSlabs = {
    Green: [200, 400, 1000, 2000, 10000, 15000, 25000, 50000, 100000, 300000, 600000, 1000000],
    Orange: [1000, 2000, 3000, 4000, 20000, 30000, 50000, 100000, 200000, 600000, 1200000, 2000000],
  };

  const investmentRanges = [5, 10, 25, 50, 100, 200, 500, 1000, 5000, 10000, 50000, 100000];

  const getIndex = (investment) => {
    for (let i = 0; i < investmentRanges.length; i++) {
      if (investment <= investmentRanges[i]) return i;
    }
    return investmentRanges.length;
  };

  const calculateFee = () => {
    const investment = parseFloat(form.investment);
    const years = form.type === "CTO" ? parseInt(form.years) || 1 : 1;

    if (isNaN(investment)) {
      alert("Please enter a valid investment amount in lakhs.");
      return;
    }

    const index = getIndex(investment);

    const baseFee =
      form.type === "CTO"
        ? ctoSlabs[form.category][index]
        : slabs[form.category][index];

    const fee = baseFee * years;

    setResult({ ...form, investment, fee, years });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow">
      <h2 className="md:text-3xl text-xl font-bold text-center text-purple-600 mb-5 md:mb-10">
        Delhi Pollution NOC Fee Calculator
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black mb-6">
        {/* Type */}
        <div>
          <label className="text-purple-600 font-medium block mb-1 text-sm">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value="CTE">CTE</option>
            <option value="CTO">CTO</option>
          </select>
        </div>

        {/* Years (only for CTO) */}
        {form.type === "CTO" && (
          <div>
            <label className="text-purple-600 font-medium block mb-1 text-sm">
              Years
            </label>
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

        {/* Category */}
        <div>
          <label className="text-purple-600 font-medium block mb-1 text-sm">
            Industry Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
             <option value="Orange">Orange</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {/* Investment */}
        <div>
          <label className="text-purple-600 font-medium block mb-1 text-sm">
            Capital Investment (in lakhs)
          </label>
          <input
            type="number"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g., 600"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={calculateFee}
        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-all"
      >
        Calculate Fee
      </button>

      {/* Result Summary */}
      {result && (
        <div className="mt-6">
          <div className="flex items-center text-purple-600 text-lg font-semibold mb-6">
            <FaCheckCircle className="mr-2" />
            Result Summary
          </div>

          <div className="">
          
            <div className="flex justify-between text-lg">
              <span className="font-xl text-black">Total Government Fee</span>
              <span className="bg-[#a855f7] text-white font-semibold rounded-lg px-5 py-1">
                ₹{result.fee.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NocFeeDelhi;
