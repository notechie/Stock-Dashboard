import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function StockChart({ symbol }) {
  const [data, setData] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const API_URL = "https://stock-dashboard-backend-zbrc.onrender.com";

  useEffect(() => {
    setData(null);
    setPrediction(null);

    fetch(`${API_URL}/api/stock/${symbol}`)
      .then((res) => res.json())
      .then(setData);

    fetch(`${API_URL}/api/predict/${symbol}`)
      .then((res) => res.json())
      .then((res) => setPrediction(res.predicted_close));
  }, [symbol, API_URL]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Line
        data={{
          labels: data.dates,
          datasets: [
            {
              label: `${symbol} Close Price`,
              data: data.close,
              borderColor: "rgba(26, 105, 224, 1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
            title: {
              display: true,
              text: `${symbol} Stock Price (1 Year)`,
            },
          },
        }}
      />
      {prediction && (
        <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>
          <strong>Predicted Next Close:</strong> ${prediction.toFixed(2)}
        </p>
      )}
    </>
  );
}
