import {useEffect, useState} from "react";
import GraficaBarra from '../components/Grafica_barra';
import GraficaLinea from '../components/Grafica_Linea';
import ShowBestLote from '../components/showBestLote';
import {getProducPerformance, getRecordprocess} from '../services/services';
import {Header} from '../components/Header';
import "../styles/home.scss";

 export const Home = () =>{
    const[scoresData, setScoresData] = useState('')
    const[bestLote, setBestLote] = useState('')

    //GRAFICAS DE TEMPERATURA
    const[scoresData1, setScoresData1] = useState('')
    const[scoresData2, setScoresData2] = useState('')
    const[scoresData3, setScoresData3] = useState('')
    const[scoresData4, setScoresData4] = useState('')
    const[scoresData5, setScoresData5] = useState('')

    useEffect(()=>{
        bestProduc() 
    },[])

    useEffect(()=>{
        getProcessTem()        
    },[bestLote])

    const bestProduc = async () =>{
        let bestLote = [];
        let bestLoteRendimiento = [];
        let bestData = await getProducPerformance()
        console.log('se hace la consulta de el mejor lote', bestData)
        setScoresData(bestData)
        bestData.forEach(item =>  {
            try {
                bestLoteRendimiento.push(parseInt(item.Rendimiento_kg))
                bestLote.push(item.Lote)
                
            } catch (error) {
                console.log('error')
            }
        })
        setScoresData(bestLoteRendimiento);
        setBestLote(bestLote);
    }
    
    const getProcessTem = async () =>{
        if(!!bestLote){
            for (let index = 0; index < bestLote.length; index++) {
                await getRecordprocess(bestLote[index])
                .then(resp => {
                    switch (index) {
                        case 0:
                            setScoresData1(resp);
                            console.log('caso 1', resp)
                            break;
                        case 1:
                            setScoresData2(resp);
                            console.log('caso 2',resp)
                            break;
                        case 2:
                            setScoresData3(resp);
                            console.log('caso 3',resp)
                            break;
                        case 3:
                            setScoresData4(resp);
                            console.log('caso 4',resp)
                            break;
                        case 4:
                            setScoresData5(resp);
                            console.log('caso 5',resp)
                            break;
                        default:
                            break;
                    }
                })
            }
            
        }

    }

    const scores = scoresData;
    return(
        <div>
            <div className="home--graphics-container">
			    <h1 className="graphics-title"> GRAFICAS COMPARATIVAS</h1>
                <div className="home-graphics">
                    <GraficaBarra
                        nameLine={"Los mejores 5 rendimientos"}
                        scores={scores}
                    /> 
                    <GraficaLinea
                        nameLine={[
                            {"name1":scoresData1.lote},
                            {"name2":scoresData2.lote},
                            {"name3":scoresData3.lote},
                            {"name4":scoresData4.lote},
                            {"name5":scoresData5.lote},
                        ]}
                        scores={!! scoresData1.datosTem ? scoresData1.datosTem :''}
                        scores2={!! scoresData2.datosTem ? scoresData2.datosTem :''}
                        scores3={!! scoresData3.datosTem ? scoresData3.datosTem :''}
                        scores4={!! scoresData4.datosTem ? scoresData4.datosTem :''}
                        scores5={!! scoresData5.datosTem ? scoresData5.datosTem :''}
                        labels={scoresData3.dataTime}
                    /> 
                </div>
		    </div>
            <div className="performance-container">
            <h1>LOS MEJORES LOTES</h1>
            <div className="performance--cards-container">
                <ShowBestLote
                    lote={scoresData1.lote}
                    contenidoMetalico={scoresData1.calidad}
                    timeProcess={!!scoresData1.tiempoProceso ? (scoresData1.tiempoProceso.toFixed(4)*10) :'' }
                    NotPackaging={scoresData1.rendimiento}
                    packaging={scoresData1.rendimiento - 5}
                    bestLote={1}
                />
                <ShowBestLote
                    lote={scoresData2.lote}
                    contenidoMetalico={scoresData2.calidad}
                    timeProcess={!!scoresData2.tiempoProceso ? scoresData2.tiempoProceso.toFixed(4)*10:'' }
                    NotPackaging={scoresData2.rendimiento}
                    packaging={scoresData2.rendimiento - 5}
                    bestLote={2}
                />
                <ShowBestLote
                    lote={scoresData3.lote}
                    contenidoMetalico={scoresData3.calidad}
                    timeProcess={!!scoresData3.tiempoProceso ? scoresData3.tiempoProceso.toFixed(4)*10:'' }
                    NotPackaging={scoresData3.rendimiento}
                    packaging={scoresData3.rendimiento - 5}
                    bestLote={3}
                />
                <ShowBestLote
                    lote={scoresData4.lote}
                    contenidoMetalico={scoresData4.calidad}
                    timeProcess={!!scoresData4.tiempoProceso ? scoresData4.tiempoProceso.toFixed(4) *10 : '' }
                    NotPackaging={scoresData4.rendimiento}
                    packaging={scoresData4.rendimiento - 5}
                    bestLote={4}
                />
                <ShowBestLote
                    lote={scoresData5.lote}
                    contenidoMetalico={scoresData5.calidad}
                    timeProcess={!!scoresData5.tiempoProceso ? scoresData5.tiempoProceso.toFixed(4) *10:''}
                    NotPackaging={scoresData5.rendimiento}
                    packaging={scoresData5.rendimiento - 5}
                    bestLote={5}
                />
            </div>
        </div>

        </div>
    )
}