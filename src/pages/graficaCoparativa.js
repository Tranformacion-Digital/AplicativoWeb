import React, { useState } from 'react';
import GraficaLineaComponent from '../components/Grafica_Linea';
import {ProcessInfo} from '../components/ProcessInfo';
import {getRecordprocess} from '../services/services';
import "../styles/GraficasComparativa.scss";
import "../styles/GraficaProceso.scss";

const GraficaComparativa = () => {	
    const [serchKeyIzq, setSerchkeyIzq]=useState('')
    const [serchKeyDer, setSerchkeyDer]=useState('')

    const [dataProcesIzq, setDataProcesIzq]=useState();
    const [dataProcesDerecha, setDataProceshDerecha]=useState();

    const dataSearchIzqLot = async () =>{
        if(!serchKeyIzq)return
        await getRecordprocess(serchKeyIzq)
        .then(res=>{
            setDataProcesIzq(res)
        })
    }
    const keySearchIzq = (e) =>{
        setSerchkeyIzq(e.target.value)
    }

    const dataSearchDerLot = async () =>{
        if(!serchKeyDer) return
        await getRecordprocess(serchKeyDer)
        .then(res=>{
             console.log('graficas comparativas',res)
             setDataProceshDerecha(res)
        })
    }
    const keySearchDer = (e) =>{
        setSerchkeyDer(e.target.value)
    }
    
	return (
		<div>
			<section className='compare-info-container'>  
				<h1> GRAFICAS COMPARATIVAS</h1>	
				<div className="compare-info-process">

                    <div className='process-info-container'>
                        <section className="process-info-card">      
                            <span className="process-info--search">
                            <input className="search-lote" type="text" 
                            placeholder="Buscar el lote" onChange={keySearchIzq} />
                            <button onClick={dataSearchIzqLot}></button>
                            </span>
                            <div className="process-info-container">
                                <GraficaLineaComponent
                                    nameLine={[
                                        {"name1":!!dataProcesIzq && !!dataProcesIzq.lote ? dataProcesIzq.lote :''}
                                    ]}
                                     scores={!!dataProcesIzq && !!dataProcesIzq.datosTem ? dataProcesIzq.datosTem : undefined}
                                    labels={!!dataProcesIzq && !!dataProcesIzq.dataTime ? dataProcesIzq.dataTime : undefined}
                                />
                                <ProcessInfo
                                    intLote = {!!dataProcesIzq && !!dataProcesIzq.lote ? dataProcesIzq.lote : undefined}
                                    intResponsable = {!!dataProcesIzq && !!dataProcesIzq.materiasPrimas && !!dataProcesIzq.materiasPrimas.responsable ? 
                                        dataProcesIzq.materiasPrimas.responsable : undefined}
                                    intMateria1 = {!!dataProcesIzq && !!dataProcesIzq.materiasPrimas && !!dataProcesIzq.materiasPrimas.varsol ? 
                                        dataProcesIzq.materiasPrimas.varsol : undefined}
                                    intMateria2 = {!!dataProcesIzq && !!dataProcesIzq.materiasPrimas && !!dataProcesIzq.materiasPrimas.acido ? 
                                        dataProcesIzq.materiasPrimas.acido : undefined}
                                    intMateria3 = {!!dataProcesIzq && !!dataProcesIzq.materiasPrimas && !!dataProcesIzq.materiasPrimas.metal ? 
                                        dataProcesIzq.materiasPrimas.metal : undefined}
                                    intCalidad = {!!dataProcesIzq && !!dataProcesIzq.calidad? dataProcesIzq.calidad : undefined}
                                    intRendimiento = {!!dataProcesIzq && !!dataProcesIzq.rendimiento ? dataProcesIzq.rendimiento : undefined}
                                    intTotalTiempoProcess = {!!dataProcesIzq && !!dataProcesIzq.tiempoProceso ? dataProcesIzq.tiempoProceso  : undefined}
                                />
                            </div>
                        </section>
                     </div>

                     <div className='process-info-container'>
                        <section className="process-info-card">      
                            <span className="process-info--search">
                            <input className="search-lote" type="text" placeholder="Buscar el lote"
                            onChange={keySearchDer}/>
                            <button onClick={dataSearchDerLot}></button>
                            </span>
                            <div className="graphic-info-container">
                                <GraficaLineaComponent
                                    nameLine={[
                                        {"name1":!!dataProcesDerecha && !!dataProcesDerecha.lote ? dataProcesDerecha.lote :''}
                                    ]}
                                     scores={!!dataProcesDerecha && !!dataProcesDerecha.datosTem ? dataProcesDerecha.datosTem : undefined}
                                    labels={!!dataProcesDerecha && !!dataProcesDerecha.dataTime ? dataProcesDerecha.dataTime : undefined}
                                />
                                <ProcessInfo
                                    intLote = {!!dataProcesDerecha && !!dataProcesDerecha.lote ? dataProcesDerecha.lote : undefined}
                                    intResponsable = {!!dataProcesDerecha && !!dataProcesDerecha.materiasPrimas && !!dataProcesDerecha.materiasPrimas.responsable ? 
                                        dataProcesDerecha.materiasPrimas.responsable : undefined}
                                    intMateria1 = {!!dataProcesDerecha && !!dataProcesDerecha.materiasPrimas && !!dataProcesDerecha.materiasPrimas.varsol ? 
                                        dataProcesDerecha.materiasPrimas.varsol : undefined}
                                    intMateria2 = {!!dataProcesDerecha && !!dataProcesDerecha.materiasPrimas && !!dataProcesDerecha.materiasPrimas.acido ? 
                                        dataProcesDerecha.materiasPrimas.acido : undefined}
                                    intMateria3 = {!!dataProcesDerecha && !!dataProcesDerecha.materiasPrimas && !!dataProcesDerecha.materiasPrimas.metal ? 
                                        dataProcesDerecha.materiasPrimas.metal : undefined}
                                    intCalidad = {!!dataProcesDerecha && !!dataProcesDerecha.calidad? dataProcesDerecha.calidad : undefined}
                                    intRendimiento = {!!dataProcesDerecha && !!dataProcesDerecha.rendimiento ? dataProcesDerecha.rendimiento : undefined}
                                    intTotalTiempoProcess = {!!dataProcesDerecha && !!dataProcesDerecha.tiempoProceso ? dataProcesDerecha.tiempoProceso  : undefined}
                                />
                            </div>
                        </section>
                     </div>
				</div>
			</section>
		</div>
	);
}

export default GraficaComparativa;