import axios from 'axios';
import moment from 'moment';

export const getRecordProcess = (async (lote)  =>{
    let mapData = {
        datosTem:[],
        dataTime:[],
        materiasPrimas:undefined,
        calidad:undefined,
        tiempoProceso:undefined,
        lote:undefined,
        rendimiento:undefined,
    }

    let recordProcess = "https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/recordsprocess/";
    let chargerMaterial = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/chargerawmaterial/";
    let qualityProduct = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/qualityproduct/";
    let performance = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/performance/";
    await axios.get(`${recordProcess}${lote}`)
    .then(result=>{
        let timeDelta;
        for (let i = 0; i <= result.data.length; i++) {
            if( result.data[i] && !!result.data[i].temperatura) mapData.datosTem.push(result.data[i].temperatura)
            if(i === 0){
                timeDelta=0;
                mapData.dataTime.push(timeDelta)
            }else if(i < result.data.length){
                let initTime= moment(result.data[i-1].time_proceso)  
                let endTime = moment(result.data[i].time_proceso)
                timeDelta = (endTime.diff(initTime))/1000              
                timeDelta = mapData.dataTime[i-1] + timeDelta;
                mapData.dataTime.push(timeDelta)
                
            }
            if(i===result.data.length) mapData.tiempoProceso = (mapData.dataTime[i-1])/60;
        }
    })
    await axios.get(`${chargerMaterial}${lote}`)
    .then(result =>{
        let materiasPrimas={
            responsable:'',
            varsol:null,
            acido:null,
            metal:null,
        };
        for (let i = 0; i < result.data.length; i++){
            materiasPrimas.responsable = result.data[i].responsable ? result.data[i].responsable :'';
            if( !materiasPrimas.varsol && result.data[i].Materiaprima === "Varsol") materiasPrimas.varsol = result.data[i].catidad_kg;
            if( !materiasPrimas.acido && result.data[i].Materiaprima === "Acido") materiasPrimas.acido = result.data[i].catidad_kg;
            if( !materiasPrimas.metal && result.data[i].Materiaprima === "Metal") materiasPrimas.metal = result.data[i].catidad_kg;
        }
        mapData.materiasPrimas = materiasPrimas;
    })
    await axios.get(`${qualityProduct}${lote}`)
    .then(result =>{
        if(!!result.data){
            mapData.calidad = result.data[0].Quality;
            mapData.lote = result.data[0].Lote;
        }
    })
    await axios.get(`${performance}${lote}`)
    .then(result =>{
        if(!!result.data){
            mapData.rendimiento = result.data[0].Rendimiento_kg;
        }
    })
    return mapData
})

export const bestPerformance = (async (data) =>{
    let newData = [];
    for(let i = 0; data.length>i; i++){
        for(let j = 0; j < (data.length-i-1);j++){
            if(data[j].Rendimiento_kg > data[j+1].Rendimiento_kg){
                let temp = data[j];
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    for(let i = (data.length - 1); (data.length - 5) <= i; i--){
        newData.push(data[i]);
    }
    return newData;
})

export const getProductPerformance = (async ()  =>{
    let bestData
    let dataProcess = [];
    await axios.get(`https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/performance/`)
    .then(resultado =>{
        // console.log('DATOS SIN ORDENAR',resultado.data)
        dataProcess = resultado.data;
        return dataProcess

    })
    await bestPerformance(dataProcess)
        .then(result =>{
        bestData = result
        // console.log('bestData',result)
    })
    return bestData;
})
