import {useEffect, useState} from "react";

import BarGraph from '../components/BarGraph';
import LineGraph from '../components/LineGraph';
import ShowBestLot from '../components/ShowBestLot';
import { getProductPerformance, getRecordProcess } from '../services/services';
import "../styles/Home.scss";

const Home = () =>{
    const[scoresData, setScoresData] = useState('')
    const[bestLote, setBestLote] = useState('')

    //Gráficas de temperatura
    const[scoresData1, setScoresData1] = useState('')
    const[scoresData2, setScoresData2] = useState('')
    const[scoresData3, setScoresData3] = useState('')
    const[scoresData4, setScoresData4] = useState('')
    const[scoresData5, setScoresData5] = useState('')

    useEffect(()=>{
        bestProduct() 
    },[])

    useEffect(()=>{
        getProcessTem()        
    },[bestLote])

    const bestProduct = async () =>{
        let bestLote = [];
        let bestLoteRendimiento = [];
        let bestData = await getProductPerformance()
        // console.log('se hace la consulta de el mejor lote', bestData)
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
    
    const getProcessTem = async () => {
        if(!!bestLote){
            for (let index = 0; index < bestLote.length; index++) {
                await getRecordProcess(bestLote[index])
                .then(resp => {
                    switch (index) {
                        case 0:
                            setScoresData1(resp);
                            // console.log('caso 1', resp)
                            break;
                        case 1:
                            setScoresData2(resp);
                            // console.log('caso 2',resp)
                            break;
                        case 2:
                            setScoresData3(resp);
                            // console.log('caso 3',resp)
                            break;
                        case 3:
                            setScoresData4(resp);
                            // console.log('caso 4',resp)
                            break;
                        case 4:
                            setScoresData5(resp);
                            // console.log('caso 5',resp)
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
            <div className="home__graphics">
                <h2 className="title"> Comparative graph</h2>
                <div className="home__graphics--container">
                    <BarGraph
                        nameLine={"Los mejores 5 rendimientos"}
                        scores={scores}
                    /> 

                    <LineGraph
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

            <div className="home__top5">
                <h1 className="title">Best lotes</h1>
                <div className="home__top5--container">
                    <ShowBestLot
                        lot={scoresData1.lote}
                        quality={scoresData1.calidad}
                        timeProcess={!!scoresData1.tiempoProceso ? (scoresData1.tiempoProceso.toFixed(4)*10) :'' }
                        performance={scoresData1.rendimiento}
                        // packaging={scoresData1.rendimiento - 5}
                        bestLot={1}
                    />

                    <ShowBestLot
                        lot={scoresData2.lote}
                        quality={scoresData2.calidad}
                        timeProcess={!!scoresData2.tiempoProceso ? scoresData2.tiempoProceso.toFixed(4)*10:'' }
                        performance={scoresData2.rendimiento}
                        // packaging={scoresData2.rendimiento - 5}
                        bestLot={2}
                    />

                    <ShowBestLot
                        lot={scoresData3.lote}
                        quality={scoresData3.calidad}
                        timeProcess={!!scoresData3.tiempoProceso ? scoresData3.tiempoProceso.toFixed(4)*10:'' }
                        performance={scoresData3.rendimiento}
                        // packaging={scoresData3.rendimiento - 5}
                        bestLot={3}
                    />

                    <ShowBestLot
                        lot={scoresData4.lote}
                        quality={scoresData4.calidad}
                        timeProcess={!!scoresData4.tiempoProceso ? scoresData4.tiempoProceso.toFixed(4) *10 : '' }
                        performance={scoresData4.rendimiento}
                        // packaging={scoresData4.rendimiento - 5}
                        bestLot={4}
                    />

                    <ShowBestLot
                        lot={scoresData5.lote}
                        quality={scoresData5.calidad}
                        timeProcess={!!scoresData5.tiempoProceso ? scoresData5.tiempoProceso.toFixed(4) *10:''}
                        performance={scoresData5.rendimiento}
                        // packaging={scoresData5.rendimiento - 5}
                        bestLot={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home