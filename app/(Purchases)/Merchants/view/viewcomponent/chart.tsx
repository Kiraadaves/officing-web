// "use client"
// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const App = () => {
//   const [options, setOptions] = useState({
//     chart: {
//       id: "basic-bar"
//     },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
//     }
//   });

//   const [series, setSeries] = useState([
//     {
//       name: "series-1",
//       data: [30, 40, 45, 50, 49, 60, 70, 91]
//     }
//   ]);

//   return (
//     <div className="app">
//       <div className="row">
//         <div className="mixed-chart">
//           <Chart
//             options={options}
//             series={series}
//             type="line"
//             width="1000"
//             height="300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
