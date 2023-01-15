import {useEffect, useState} from "react";

import LineGraph from '../components/LineGraph';
import ProcessInfo from '../components/ProcessInfo';
import {getRecordProcess} from '../services/services';

import "../styles/ProcessGraph.scss";

const ProcessGraph = () => {
    const[search, setSearch] = useState('')
    const[scores, setScores] = useState('')

    const searchLot = async () =>{
        if(!search)return
        await getRecordProcess(search)
        .then(res=>{
            setScores(res)
        })
    }

    const dataSearch = (e) =>{
        setSearch(e.target.value) 
    }

    return(
        <div className='process__info'>
            <h2 className="title">Process graph</h2>
            
            <span className="comparative__info--search">
                <input className="search-lote" type="text" placeholder="Buscar el lote" 
                    onChange={dataSearch} 
                    />
                <button onClick={searchLot}></button>
            </span>

            <section className="process__info--card">      
                {/* <div className="comparative__info--data"> */}
                <div className="process__info--graphic">
                    <LineGraph
                        nameLine={[
                            {"name1":!!scores && !!scores.lote ? scores.lote :''}
                        ]}
                        scores={scores.datosTem}
                        labels={scores.dataTime}
                    />
                </div>

                    <ProcessInfo
                        intLote = {scores.lote}
                        intResponsable = {scores.materiasPrimas && !!scores.materiasPrimas.responsable ? 
                            scores.materiasPrimas.responsable : undefined}
                        intMateria1 = {scores.materiasPrimas && !!scores.materiasPrimas.varsol ? 
                            scores.materiasPrimas.varsol : undefined}
                        intMateria2 = {scores.materiasPrimas && !!scores.materiasPrimas.acido ? 
                            scores.materiasPrimas.acido : undefined}
                        intMateria3 = {scores.materiasPrimas && !!scores.materiasPrimas.metal ? 
                            scores.materiasPrimas.metal : undefined}
                        intCalidad = {scores.calidad}
                        intRendimiento = {scores.rendimiento}
                        intTotalTiempoProcess = {scores.tiempoProceso}
                    />
                {/* </div> */}
            </section>
        </div>
    );
}

export default ProcessGraph;