import React from "react";
import GraficaBarra from '../components/Grafica_barra';
import GraficaLinea from '../components/Grafica_Linea';
import ShowBestLote from '../components/showBestLote';
import {Header} from '../components/Header';
import "../styles/home.scss";

 export const Home = () =>{
    const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
    const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
    const scores3 = [1, 4, 6, 8, 4, 4, 5, 3, 2];
    const scores4 = [2, 3, 4, 6, 7, 8, 9, 10, 11];
    const scores5 = [0, 2, 3, 8, 9, 6, 7, 8, 2];
    let labels = [100, 200, 300, 400, 500, 600, 700];// linea de tiempo
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
                        nameLine={"nameG"}
                        scores={scores}
                        scores2={scores2}
                        scores3={scores3}
                        scores4={scores4}
                        scores5={scores5}
                        labels={labels}
                    /> 
                </div>
		    </div>
            <div className="performance-container">
            <h1>LOS MEJORES LOTES</h1>
            <div className="performance--cards-container">
                <ShowBestLote
                    lote={"A11"}
                    contenidoMetalico={"15"}
                    timeProcess={"24:25"}
                    NotPackaging={"112.0"}
                    packaging={"110.0"}
                    bestLote={1}
                />
                <ShowBestLote
                    lote={"A12"}
                    contenidoMetalico={"12"}
                    timeProcess={"24:25"}
                    NotPackaging={"104.0"}
                    packaging={"98.0"}
                    bestLote={2}
                />
                <ShowBestLote
                    lote={"A13"}
                    contenidoMetalico={"10"}
                    timeProcess={"24:25"}
                    NotPackaging={"107.0"}
                    packaging={"98.0"}
                    bestLote={3}
                />
                <ShowBestLote
                    lote={"A14"}
                    contenidoMetalico={"7"}
                    timeProcess={"24:25"}
                    NotPackaging={"105.0"}
                    packaging={"98.0"}
                    bestLote={4}
                />
                <ShowBestLote
                    lote={"A15"}
                    contenidoMetalico={"6"}
                    timeProcess={"25:25"}
                    NotPackaging={"108.0"}
                    packaging={"98.0"}
                    bestLote={5}
                />
            </div>
        </div>

        </div>
    )
}