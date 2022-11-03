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
    const dataFack = [0]
      return {
        datasets: [
          {
            label:!!nameLine && !!nameLine[0] && !!nameLine[0].name1 
              ? nameLine[0].name1 : 'no aplica',
            data: !!scores ? scores : dataFack,
            tension: 0.3,
            borderColor: "rgb(118, 213, 23)",
            pointRadius: 6,
            pointBackgroundColor: "rgb(118, 213, 23)",
          },
          {
            label: !!nameLine && !!nameLine[1] && !!nameLine[1].name2 
              ? nameLine[1].name2 : 'no aplica',
            data: !!scores2 ? scores2 : dataFack,
            tension: 0.3,
            borderColor: "rgb(213, 95, 23)",
            pointRadius: 6,
            pointBackgroundColor:"rgb(213, 95, 23)",
                       
          },
          {
            label:!!nameLine && !!nameLine[2] && !!nameLine[2].name3 
              ? nameLine[2].name3 :'no aplica',
            data: !!scores3 ? scores3 : dataFack,
            tension: 0.3,
            borderColor: "rgb(23, 75, 213)",
            pointRadius: 6,
            pointBackgroundColor:  "rgb(23, 75, 213)",
          },
          {
            label:!!nameLine && !!nameLine[3] && !!nameLine[3].name4 
              ? nameLine[3].name4 :'no aplica',
            data: !!scores4 ? scores4 : dataFack,
            tension: 0.3,
            borderColor: "rgb(213, 23, 66)",
            pointRadius: 6,
            pointBackgroundColor: "rgb(213, 23, 66)",
          },
          {
            label:!!nameLine && !!nameLine[4] && !!nameLine[4].name5 
              ? nameLine[4].name5:'no aplica',
            data: !!scores5 ? scores5 : dataFack,
            tension: 0.3,
            borderColor: "rgb(204, 213, 23 )",
            pointRadius: 6,
            pointBackgroundColor: "rgb(204, 213, 23 )",
          },
        ],
        labels,
      };
    }, [nameLine]);
  
    return (
      <div className="graphic-columns-container">
        <Line data={data} options={options} />
      </div>
    );
}