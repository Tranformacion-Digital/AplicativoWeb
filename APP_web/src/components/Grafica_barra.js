import { useMemo, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../styles/Grafica.scss"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


  let labels = [1, 2, 3, 4, 5];// linea de tiempo

  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

export default function BarrChart({nameLine, scores}) {

    const data = useMemo(function () {
      return {
        datasets: [
          {
            label: !!nameLine ? nameLine : 'name defaul',
            data: scores,
            tension: 0.3,
            borderColor: "rgb(167, 204, 198)",
            backgroundColor:"rgb(167, 204, 198)",
          },
        ],
        labels,
      };
    }, []);
  
    return (
      <div className="graphic-columns-container">
         <Bar data={data} options={options} />
      </div>
   );
}