import React, { useEffect,useState } from "react";
import '../styles/processInfo.scss'


export const ProcessInfo = (dataProcess) => {
    // const {intLote, intResponsable, intMateria1, intMateria2,
    //     intMateria3, intCanlidad, intRendimiento, intTotalTiempoProcess} = dataProcess;
    const[dataProces, setDataProces]= useState('')
    useEffect(()=>{
        setDataProces(dataProcess)
    },[dataProcess])


    return (
        <section className="performance-card">
            <span className="container-info">
                <p>Lote:</p>
                <div className="box">
                    {dataProces.intLote ? dataProces.intLote : 'Lote del Proceso'}
                </div>
            </span>
            <span className="container-info">
                <p>Responsable:</p>
                <div className="box">
                 {dataProces.intResponsable ? dataProces.intResponsable : 'Responsable del Proceso'} 
                </div>
            </span>
            <span className="container-info">
                <p>Cantidad varsol:</p>
                <div className="box">
                    {dataProces.intMateria1 ? dataProces.intMateria1 : 'Cantidad varsol en el proceso'} Kg
                </div>
            </span>
            <span className="container-info">
                <p>Cantidad acido:</p>
                <div className="box">
                    {dataProces.intMateria2 ? dataProces.intMateria2 : 'Cantidad acido en el proceso'} Kg
                </div>
            </span>
            <span className="container-info">
                <p>Metal aplicado:</p>
                <div className="box">
                    {dataProces.intMateria3 ? dataProces.intMateria3 : 'Cantidad Metal aplicado en el proceso'} Kg
                </div>
            </span>
            <span className="container-info">
                <p>Canlidad del producto:</p>
                <div className="box">
                    {dataProces.intCalidad ? dataProces.intCalidad : 'Canlidad del producto'} %
                </div>
            </span>
            <span className="container-info">
                <p>Rendimiento:</p>
                <div className="box">
                    {dataProces.intRendimiento ? dataProces.intRendimiento : 'Rendimiento del Proceso'} %
                </div>
            </span>
            <span className="container-info">
                <p>Tiempo de porceso:</p>
                <div className="box">
                    {dataProces.intTotalTiempoProcess ? dataProces.intTotalTiempoProcess : 'Tiempo de porceso del Proceso'} Horas
                </div>
            </span>
        </section>
    );

}
