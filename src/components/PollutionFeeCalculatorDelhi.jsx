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
    <div className="max-w-5xl mb-10 -mt-10 ">
      <h2 className="md:text-2xl text-xl   font-bold text-  text-[#7A3EF2] mb-4 md:mb-10">
        Delhi Pollution NOC Fee Calculator
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-black mb-6">
        {/* Type */}
        <div>
          <label className="text-[#7A3EF2] font-medium block mb-1 md:text-sm text-xs">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
            <option value="CTE">CTE</option>
            <option value="CTO">CTO</option>
          </select>
        </div>

        {/* Years (only for CTO) */}
        {form.type === "CTO" && (
          <div>
            <label className="text-[#7A3EF2] font-medium block mb-1 md:text-sm text-xs">
              Years
            </label>
            <input
              type="number"
              name="years"
              min="1"
              value={form.years}
              onChange={handleChange}
              className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}

        {/* Category */}
        <div>
          <label className="text-[#7A3EF2] font-medium block mb-1 md:text-sm text-xs">
            Industry Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          >
             <option value="Orange">Orange</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {/* Investment */}
        <div>
          <label className="text-[#7A3EF2] font-medium block mb-1 md:text-sm text-xs">
            Capital Investment (in lakhs)
          </label>
          <input
            type="number"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g., 600"
            className="w-full p-1 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={calculateFee}
        className="w-full py-2 text-sm  rounded bg-[#7A3EF2] hover:bg-purple-700 text-white font-semibold text-lg transition-all"
      >
        Calculate Fee
      </button>

      {/* Result Summary */}
      {result && (
        <div className="mt-4">
          <div className="flex items-center text-[#7A3EF2] text-lg font-semibold mb-4">
            <FaCheckCircle className="mr-2" />
            Result Summary
          </div>

          <div className="">
          
            <div className="flex justify-between ">
              <span className="md:font-sm  text-black">Total Government Fee</span>
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
