import axios from 'axios';
import moment from 'moment';

export const getRecordprocess = (async (lote)  =>{
    console.log('se hace las peticiones',lote);
    let mappData = {
        datosTem:[],
        dataTime:[],
        materiasPrimas:undefined,
        calidad:undefined,
        tiempoProceso:undefined,
        lote:undefined,
        rendimiento:undefined,
    }

    let recordsprocess = "https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/recordsprocess/";
    let chargerawmaterial = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/chargerawmaterial/";
    let qualityproduct = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/qualityproduct/";
    let performance = " https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/performance/";
    await axios.get(`${recordsprocess}${lote}`)
    .then(result=>{
        let timeDelta;
        for (let i = 0; i <= result.data.length; i++) {
            if( result.data[i] && !!result.data[i].temperatura) mappData.datosTem.push(result.data[i].temperatura)
            if(i === 0){
                timeDelta=0;
                mappData.dataTime.push(timeDelta)
            }else if(i < result.data.length){
                let initTime= moment(result.data[i-1].time_proceso)
                let endTime = moment(result.data[i].time_proceso)
                timeDelta = (endTime.diff(initTime))/1000
                timeDelta = mappData.dataTime[i-1] + timeDelta;
                mappData.dataTime.push(timeDelta)
            }
            if(i===result.data.length) mappData.tiempoProceso = (mappData.dataTime[i-1])/60;
        }
    })
    await axios.get(`${chargerawmaterial}${lote}`)
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
        mappData.materiasPrimas = materiasPrimas;
    })
    await axios.get(`${qualityproduct}${lote}`)
    .then(result =>{
        if(!!result.data){
            mappData.calidad = result.data[0].Quality;
            mappData.lote = result.data[0].Lote;
        }
    })
    await axios.get(`${performance}${lote}`)
    .then(result =>{
        if(!!result.data){
            mappData.rendimiento = result.data[0].Rendimiento_kg;
        }
    })
    console.log('mappData',mappData);
    return mappData
})
