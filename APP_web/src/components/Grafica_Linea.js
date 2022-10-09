import { useMemo, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles/Grafica.scss"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


 // linea de tiempo 

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

export default function LineChart({nameLine, scores, scores2, scores3, scores4, scores5, labels}) {
    const data = useMemo(function () {
      return {
        datasets: [
          {
            label:!!nameLine && !!nameLine.name_1 ? nameLine.name_1 : 'no aplica',
            data: scores,
            tension: 0.3,
            borderColor: "rgb(118, 213, 23)",
            pointRadius: 6,
            pointBackgroundColor: "rgb(118, 213, 23)",
          },
          {
            label:!!nameLine && !!nameLine.name_2 ? nameLine.name_2 : 'no aplica',
            data: scores2,
            tension: 0.3,
            borderColor: "rgb(213, 95, 23)",
            pointRadius: 6,
            pointBackgroundColor:"rgb(213, 95, 23)",
                       
          },
          {
            label:!!nameLine && !!nameLine.name_3 ? nameLine.name_3 :'no aplica',
            data: scores3,
            tension: 0.3,
            borderColor: "rgb(23, 75, 213)",
            pointRadius: 6,
            pointBackgroundColor:  "rgb(23, 75, 213)",
          },
          {
            label:!!nameLine && !!nameLine.name_4 ? nameLine.name_4 :'no aplica',
            data: scores4,
            tension: 0.3,
            borderColor: "rgb(213, 23, 66)",
            pointRadius: 6,
            pointBackgroundColor: "rgb(213, 23, 66)",
          },
          {
            label:!!nameLine && !!nameLine.name_5 ? nameLine.name_5 :'no aplica',
            data: scores5,
            tension: 0.3,
            borderColor: "rgb(204, 213, 23 )",
            pointRadius: 6,
            pointBackgroundColor: "rgb(204, 213, 23 )",
          },
        ],
        labels,
      };
    }, [labels]);
  
    return (
      <div className="graphic-columns-container">
        <Line data={data} options={options} />
      </div>
    );
}