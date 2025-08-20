import React, { useEffect, useState } from "react";
import { getBooksByYear } from "../api/bookApi";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function ReportChart() {
  const [report, setReport] = useState([]);
  const safeReport = Array.isArray(report) ? report : [];

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const res = await getBooksByYear();
    setReport(res.data);
  };

  const data = {
    labels: safeReport.map((r) => r.published_year),
    datasets: [
      {
        label: "Books per Year",
        data: safeReport.map((r) => r.total),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  };

  return (
    <div className="card">
      <h2>📊 Books Report by Year</h2>
      <Bar data={data} />
    </div>
  );
}

export default ReportChart;
