import React from "react";
import { Container, Card } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ achievements }) {
  const categoryCounts = achievements.reduce((acc, a) => {
    const cat = a.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const total = achievements.length;

  const chartData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: [
          "#007bff",
          "#28a745",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2 className="text-center mb-4">📈 Achievement Dashboard</h2>

      <div className="d-flex justify-content-around flex-wrap mb-4">
        <Card className="p-3 shadow-sm text-center" style={{ width: "200px" }}>
          <h5>Total Achievements</h5>
          <h3>{total}</h3>
        </Card>

        {Object.keys(categoryCounts).map((cat, i) => (
          <Card key={i} className="p-3 shadow-sm text-center" style={{ width: "200px" }}>
            <h6>{cat}</h6>
            <h4>{categoryCounts[cat]}</h4>
          </Card>
        ))}
      </div>

      <div style={{ width: "400px", margin: "0 auto" }}>
        <Pie data={chartData} />
      </div>
    </Container>
  );
}
