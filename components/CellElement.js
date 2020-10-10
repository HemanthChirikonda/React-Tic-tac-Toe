
import React, { useEffect, useState } from "react"

const CellElement =(props)=>{



    const [st,setSt]= useState(true)
    const clik=(e)=>{
       if(st){
    
        props.onClicked(e);
        
        setSt(!st)
       }
          
    }
    
    return (
       
        <div className={props.clname} onClick={clik} style ={props.style}>
           
        </div>
    )
};

export default CellElement;