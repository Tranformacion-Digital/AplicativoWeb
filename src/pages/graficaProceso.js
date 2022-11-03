import {useEffect, useState} from "react";
import GraficaLinea from '../components/Grafica_Linea';
import {ProcessInfo} from '../components/ProcessInfo';
import {getRecordprocess} from '../services/services';
import "../styles/GraficaProceso.scss";
//import Lupa from '@Logos/lupa.png';

const GraficaProceso = () => {
    const[serch, setSearch] = useState('')
    const[scores, setScores] = useState('')
    const[labels, setlabels] = useState('')

    let name ={
        name_1:'AL222',
    }
    useEffect(()=>{
        console.log('cambio',scores)
    },[scores])

    const searchLot = async () =>{
        if(!serch)return
        await getRecordprocess(serch)
        .then(res=>{
            console.log('respuesta del backend',res)
            setScores(res)
        })
    }

    const dataSearch = (e) =>{
            setSearch(e.target.value) 
    }

    return(
        <>
        {/* <Header /> */}
            <div className='process-info-container'>
                <h1> GRAFICAS DE PROCESO</h1>
                <section className="process-info-card">      
                    <span className="process-info--search">
                    <input className="search-lote" type="text" placeholder="Buscar el lote" 
                        onChange={dataSearch} 
                        />
                     <button onClick={searchLot}></button>
                     </span>
                    <div className="graphic-info-container">
                        
                         <GraficaLinea
                            nameLine={[
                                {"name1":!!scores && !!scores.lote ? scores.lote :''}
                            ]}
                            scores={scores.datosTem}
                            labels={scores.dataTime}
                         />

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
                    </div>
                </section>
             </div>
        </>

    );
}

export default GraficaProceso;