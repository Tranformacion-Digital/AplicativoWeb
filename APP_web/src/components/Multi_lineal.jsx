import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10'],
    datasets: [
      {
        label: '# LOTE 200',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# LOTE 300',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
      {
        label: '# LOTE 350',
        data: [3, 1, 4, 3, 1, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 2)',
        borderColor: 'rgba(54, 162, 2, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
  

const Multi_lineal = () => {

    return (
        <div className='MultiAxisChartjs' styles={{width:'500px', height:'200px'}}>
            <div className='header'>
               <h1 className='title'>GRFICA DE PROCESO </h1>
            </div>
            <Line data={data} options={options} />
      </div>

    );
}

export default Multi_lineal;