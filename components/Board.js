import React, { useEffect, useState } from "react"
import CellElement from "./CellElement"

const Board = (props) => {
    const X_Class = "x";
    const circle_Class = "circle";
    const cell="cell";
    

    return (
        <div className={props.clname}  style={props.style}>
            {
                props.cellElements.map((item, index) => {
                    const [cellClass,setcellClass]=useState(cell);
                    const changeCellclassname=(e)=>{
                        props.chageclassturn();
                     
                        const cellX = `${cell} ${X_Class}`
                        const cellCircle = `${cell} ${circle_Class}`
                        setcellClass(props.classturn? cellCircle:cellX);
                       
                      
                    }
                   
                    return (<CellElement key={index} clname={cellClass} onClicked={changeCellclassname} />)
                })
            }



        </div>
    )
}

export default Board;