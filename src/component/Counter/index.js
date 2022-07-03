import React,{useState,useEffect} from 'react';



//acccpet the props 
//duration(in sec) , callBack

const Counter=(props)=>{
   
    const {duration, callBack}=props;

    const [timer,startTimer]=useState(0);





return(
    <main>
        <h2>{counter}</h2>
    </main>
)

};


export default Counter;

const getFormatedTime=(duration)=>{

    //1000 miliSec means 1sec

    // min, hour , sec, days
    const min=Math.floor(duration/60000);
    const hour=Math.floor(duration/600000);
   const days=Math.floor(duration/(600000*24));
    const sec=Math.floor(duration/1000);

return `${days} : ${hour} : ${min} : ${sec}`

}

//accept the duration in millisecond 
//day // hour min / sec
