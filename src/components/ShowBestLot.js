import React from "react";

import "../styles/ShowBestLot.scss";

const ShowBestLot = ({lot, quality, timeProcess, performance, bestLot}) => {  
    return (
        <div className="performance__card">
            <h2 className="performance__card--title">{bestLot}</h2>
            <table className="performance__card--table">
                <tbody>
                    <tr>
                        <th>Lot</th>
                        <td>{lot ? lot : 'abc11'}</td>
                    </tr>
                    <tr>
                        <th>Quality</th>
                        <td>{quality ? quality : '10'}%</td>
                    </tr>
                    <tr>
                        <th>Processing time</th>
                        <td>{timeProcess ? timeProcess : '10'}%</td>
                    </tr>
                    <tr>
                        <th>Performance</th>
                        <td>{performance ? performance : '10'}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShowBestLot;