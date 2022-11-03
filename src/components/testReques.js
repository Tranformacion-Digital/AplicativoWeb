import React, {useEffect} from 'react';
import axios from 'axios';
import Grafica_Linea from './Grafica_Linea';
import Grafica_barra from './Grafica_barra';
import ProcessInfo from './ProcessInfo';

const TestReques = () => {
    const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
    const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
    const scores3 = [1, 4, 6, 8, 4, 4, 5, 3, 2];
    const scores4 = [2, 3, 4, 6, 7, 8, 9, 10, 11];
    const scores5 = [0, 2, 3, 8, 9, 6, 7, 8, 2];
    let labels = [100, 200, 300, 400, 500, 600, 700];// linea de tiempo
    let name ={
        
        name_2:'name_2',
        name_3:'name_3',
        name_4:'name_4',
        name_5:'name_5'
    }
    // useEffect(()=>{
    //     peticion()
    // })


//('https://pokeapi.co/api/v2/pokemon/ditto')//

    return(<div>
        {/* <Grafica_Linea
            nameLine={name}
            scores={scores}
            scores2={scores2}
            scores3={scores3}
            scores4={scores4}
            scores5={scores5}
            labels={labels}
        />
        <Grafica_barra
            nameLine={name}
            scores={scores}
            scores2={scores2}
            scores3={scores3}
            scores4={scores4}
            scores5={scores5}
            labels={labels}
        /> */}
        <processInfo/>

    </div>)

}
 export default TestReques;