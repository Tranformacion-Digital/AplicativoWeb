import React, { useEffect, useState } from "react";

import '../styles/ProcessInfo.scss'

const ProcessInfo = (data) => {
    const[dataProcess, setDataProcess]= useState('')

    useEffect(()=>{
        setDataProcess(data)
    },[data])

    return (
        <table className="info">
            <tbody>
                <tr>
                    <th>Lot</th>
                    <td>{dataProcess.intLote ? dataProcess.intLote : 'ABC1234'}</td>
                </tr>
                <tr>
                    <th>Responsible</th>
                    <td>{dataProcess.intResponsable ? dataProcess.intResponsable : 'Operator'}</td>
                </tr>
                <tr>
                    <th>Amount of varsol</th>
                    <td>{dataProcess.intMateria1 ? dataProcess.intMateria1 : '1000'} Kg</td>
                </tr>
                <tr>
                    <th>Amount of acid</th>
                    <td>{dataProcess.intMateria2 ? dataProcess.intMateria2 : '1000'} Kg</td>
                </tr>
                <tr>
                    <th>Applied metal</th>
                    <td>{dataProcess.intMateria3 ? dataProcess.intMateria3 : '1000'} Kg</td>
                </tr>
                <tr>
                    <th>Product quantity</th>
                    <td>{dataProcess.intCalidad ? dataProcess.intCalidad : '99'} %</td>
                </tr>
                <tr>
                    <th>Performance</th>
                    <td>{dataProcess.intRendimiento ? dataProcess.intRendimiento : '99'} %</td>
                </tr>
                <tr>
                    <th>Processing time</th>
                    <td>{(dataProcess.intTotalTiempoProcess ? dataProcess.intTotalTiempoProcess : '1')*10} Horas</td>
                </tr>
            </tbody>
        </table>
    );

}

export default ProcessInfo