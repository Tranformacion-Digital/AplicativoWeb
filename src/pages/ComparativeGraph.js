import React, { useState } from 'react';
import LineGraph from '../components/LineGraph';
import ProcessInfo from '../components/ProcessInfo';
import { getRecordProcess } from '../services/services';
import "../styles/ComparativeGraph.scss";

const GraphicComparative = () => {	
    const [searchKeyIzq, setSearchKeyIzq] = useState('')
    const [searchKeyDer, setSearchKeyDer] = useState('')

    const [dataProcessIzq, setDataProcessIzq] = useState();
    const [dataProcessDerecha, setDataProcessDerecha] = useState();

    const dataSearchIzqLot = async () =>{
        if(!searchKeyIzq)return
        await getRecordProcess(searchKeyIzq)
        .then(res=>{
            setDataProcessIzq(res)
        })
    }
    const keySearchIzq = (e) =>{
        setSearchKeyIzq(e.target.value)
    }

    const dataSearchDerLot = async () =>{
        if(!searchKeyDer) return
        await getRecordProcess(searchKeyDer)
        .then(res=>{
            setDataProcessDerecha(res)
        })
    }
    const keySearchDer = (e) =>{
        setSearchKeyDer(e.target.value)
    }
    
	return (
        <section className='comparative'>  
            <h1 className='title'>Comparative graphic</h1>	
            <div className="comparative__container">
                <section className="comparative__info">      
                    <span className="comparative__info--search">
                        <input type="text" placeholder="Buscar el lote" onChange={keySearchIzq} />
                        <button onClick={dataSearchIzqLot}></button>
                    </span>

                    <div className="comparative__info--data">
                        <LineGraph
                            nameLine={[
                                {"name1":!!dataProcessIzq && !!dataProcessIzq.lote ? dataProcessIzq.lote :''}
                            ]}
                            scores={!!dataProcessIzq && !!dataProcessIzq.datosTem ? dataProcessIzq.datosTem : undefined}
                            labels={!!dataProcessIzq && !!dataProcessIzq.dataTime ? dataProcessIzq.dataTime : undefined}
                        />

                        <ProcessInfo
                            intLote = {!!dataProcessIzq && !!dataProcessIzq.lote ? dataProcessIzq.lote : undefined}
                            intResponsable = {!!dataProcessIzq && !!dataProcessIzq.materiasPrimas && !!dataProcessIzq.materiasPrimas.responsable ? 
                                dataProcessIzq.materiasPrimas.responsable : undefined}
                            intMateria1 = {!!dataProcessIzq && !!dataProcessIzq.materiasPrimas && !!dataProcessIzq.materiasPrimas.varsol ? 
                                dataProcessIzq.materiasPrimas.varsol : undefined}
                            intMateria2 = {!!dataProcessIzq && !!dataProcessIzq.materiasPrimas && !!dataProcessIzq.materiasPrimas.acido ? 
                                dataProcessIzq.materiasPrimas.acido : undefined}
                            intMateria3 = {!!dataProcessIzq && !!dataProcessIzq.materiasPrimas && !!dataProcessIzq.materiasPrimas.metal ? 
                                dataProcessIzq.materiasPrimas.metal : undefined}
                            intCalidad = {!!dataProcessIzq && !!dataProcessIzq.calidad? dataProcessIzq.calidad : undefined}
                            intRendimiento = {!!dataProcessIzq && !!dataProcessIzq.rendimiento ? dataProcessIzq.rendimiento : undefined}
                            intTotalTiempoProcess = {!!dataProcessIzq && !!dataProcessIzq.tiempoProceso ? dataProcessIzq.tiempoProceso  : undefined}
                        />
                    </div>
                </section>

                <section className="comparative__info">      
                    <span className="comparative__info--search">
                        <input type="text" placeholder="Buscar el lote"
                        onChange={keySearchDer}/>
                        <button onClick={dataSearchDerLot}></button>
                    </span>

                    <div className="comparative__info--data">
                        <LineGraph
                            nameLine={[
                                {"name1":!!dataProcessDerecha && !!dataProcessDerecha.lote ? dataProcessDerecha.lote :''}
                            ]}
                            scores={!!dataProcessDerecha && !!dataProcessDerecha.datosTem ? dataProcessDerecha.datosTem : undefined}
                            labels={!!dataProcessDerecha && !!dataProcessDerecha.dataTime ? dataProcessDerecha.dataTime : undefined}
                        />

                        <ProcessInfo
                            intLote = {!!dataProcessDerecha && !!dataProcessDerecha.lote ? dataProcessDerecha.lote : undefined}
                            intResponsable = {!!dataProcessDerecha && !!dataProcessDerecha.materiasPrimas && !!dataProcessDerecha.materiasPrimas.responsable ? 
                                dataProcessDerecha.materiasPrimas.responsable : undefined}
                            intMateria1 = {!!dataProcessDerecha && !!dataProcessDerecha.materiasPrimas && !!dataProcessDerecha.materiasPrimas.varsol ? 
                                dataProcessDerecha.materiasPrimas.varsol : undefined}
                            intMateria2 = {!!dataProcessDerecha && !!dataProcessDerecha.materiasPrimas && !!dataProcessDerecha.materiasPrimas.acido ? 
                                dataProcessDerecha.materiasPrimas.acido : undefined}
                            intMateria3 = {!!dataProcessDerecha && !!dataProcessDerecha.materiasPrimas && !!dataProcessDerecha.materiasPrimas.metal ? 
                                dataProcessDerecha.materiasPrimas.metal : undefined}
                            intCalidad = {!!dataProcessDerecha && !!dataProcessDerecha.calidad? dataProcessDerecha.calidad : undefined}
                            intRendimiento = {!!dataProcessDerecha && !!dataProcessDerecha.rendimiento ? dataProcessDerecha.rendimiento : undefined}
                            intTotalTiempoProcess = {!!dataProcessDerecha && !!dataProcessDerecha.tiempoProceso ? dataProcessDerecha.tiempoProceso  : undefined}
                        />
                    </div>
                </section>
            </div>
        </section>
	);
}

export default GraphicComparative;