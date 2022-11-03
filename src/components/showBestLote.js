import React from "react";
import "../styles/showBestLote.scss";

const ShowBestLote = ({lote, contenidoMetalico , timeProcess, NotPackaging, packaging, bestLote}) => {  
    return (
        <a  className ="performance-card">
            <h2 className="performance-card--title">{bestLote}</h2>
            <div className="performance-card--data">
                <p>Lote</p>
                <p> {lote ? lote : 'abc11'}</p>
            </div>
            <div className="performance-card--data">
                <p>Contenido Metalico</p>
                <p> {contenidoMetalico ? contenidoMetalico : '10'}%</p>
            </div>
            <div className = "performance-card--data">
                <p>Tiempo de proceso</p>
                <p>{timeProcess ? timeProcess : '24:00 '} Horas</p>
            </div>
            <div className = "performance-card--data">
                <p>Producto sin empacar</p>
                <p>{NotPackaging ? NotPackaging : '1'} kg</p>
            </div>
            <div className = "performance-card--data">
                <p>Producto  empacar</p>
                <p>{packaging ? packaging : '1'} kg</p>
            </div>
        </a>
    );
}

export default ShowBestLote;