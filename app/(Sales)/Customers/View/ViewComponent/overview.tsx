import React from 'react'
import Chart from "./chart"

const months = [
  {value: "last12months", label: "Last 12 Months"},
  {value: "last6months", label: "Last 6 Months"},
  {value: "last3months", label: "Last 3 Months"},
]
const overview = () => {
  return (
    <>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[1rem] font-extrabold text-[#101618]">Income</h1>
        <p>Chart illustrating your monthly transaction with this customer, it's displayed in the customer's currency</p>
      </div>
      <select className="px-2 py-2 bg-[#fff] text-[#2F345D] rounded-[0.7rem] border-2 " >
        {months.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>

    <Chart />
    <h6 className="text-[1rem] font-extrabold text-[#101618]">
      Total inflow (last 12 months): ₦ 4,670
    </h6>

    </>
  )
}

export default overview