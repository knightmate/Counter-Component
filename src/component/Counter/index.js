import React,{useState,useEffect} from 'react';



//acccpet the props 
//duration(in sec) , callBack

 const Counter=(props)=>{
   
    const {duration, callBack}=props;

    const [timer,startTimer]=useState(duration);


  console.log(timer );

  

   useEffect(()=>{
   
    if(!timer)
    {
       console.log("drfdrf")
        if(callBack)
        callBack();
       
     return;
    }

   const id= setTimeout(()=>{
    startTimer(timer-1000)
   },1000);

   return ()=>{

      clearTimeout(id);

   };

   },[timer])


return getFormatedTime(timer);

};


export default Counter;

const getFormatedTime=(duration)=>{
  console.log("Duration",duration)
    //1000 miliSec means 1sec

    // min, hour , sec, days 
    const sec=Math.floor((duration/1000)%60);
    const min=Math.floor((duration/60000)%60);
    const hour=Math.floor((duration/3600000)%24);
   const days=Math.floor(duration/(3600000*24));
    

return `${days}  ${hour}  ${min}  ${sec}`;

}

//accept the duration in millisecond 
//day // hour min / sec
