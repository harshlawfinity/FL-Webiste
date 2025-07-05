import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const NocFeeUP = () => {
  const [form, setForm] = useState({
    type: "CTE",
    category: "Red",
    investment: "",
    years: 1,
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Slab ranges in lakhs
  const cteRanges = [9, 50, 100, 1000, 5000, 10000, 50000];
  const cteFees = [500, 1500, 3000, 10000, 25000, 37000, 50000];

  const ctoRanges = [10, 50, 100, 1000, 5000, 10000, 50000];
  const ctoFees = [1000, 3000, 8000, 40000, 100000, 150000, 200000];

  const getIndex = (investment, ranges) => {
    for (let i = 0; i < ranges.length; i++) {
      if (investment <= ranges[i]) return i;
    }
    return ranges.length - 1;
  };

  const calculateFee = () => {
    const investment = parseFloat(form.investment);
    const years = form.type === "CTO" ? parseInt(form.years) || 1 : 1;

    if (isNaN(investment)) {
      alert("Please enter a valid investment amount in lakhs.");
      return;
    }

    const fee =
      form.type === "CTE"
        ? cteFees[getIndex(investment, cteRanges)]
        : ctoFees[getIndex(investment, ctoRanges)] * years;

    setResult({ ...form, investment, fee, years });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg- rounded-3xl shadow">
      <h2 className="md:text-3xl text-2xl font-bold text-center text-purple-600 md:mb-10 mb-5">
        Uttar Pradesh Pollution NOC Fee Calculator
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black mb-6">
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
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
          </select>
        </div>

        <div>
          <label className="text-purple-600 font-medium block mb-1 text-sm">
            Capital Investment (in lakhs)
          </label>
          <input
            type="number"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g., 500"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      <button
        onClick={calculateFee}
        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-all"
      >
        Calculate Fee
      </button>

      {result && (
        <div className="mt-12 border-t pt-6">
          <div className="flex items-center text-purple-600 text-lg font-semibold mb-6">
            <FaCheckCircle className="mr-2" />
            Result Summary
          </div>

          <div className="space-y-4 text-lg">
           
             
            <div className="flex justify-between ">
              <span className="text-black">Government Fee</span>
              <span className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow">
                ₹{result.fee.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NocFeeUP;
