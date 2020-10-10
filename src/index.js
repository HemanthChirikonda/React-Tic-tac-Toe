import { checkPropTypes } from "prop-types"
import React, { Fragment, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import CellElement from "../components/CellElement"
import Button from "../components/Button"
import Board from "../components/Board"
import Winpage from "../components/WinPage"


const App = () => {
    const X_Class = "x";
    const circle_Class = "circle";
    const [classTrun, setclassturn] = useState(false);
    const board = "board";
    const winningCombinations=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const [boardClass, setboardClass] = useState(board);
    const [cellElements, setCellElements] = useState([...new Array(9).fill(Math.random())]);
    const [end,setend]=useState(false);
    const [winningMessage,setwinningMeessage]=useState("");
    const checkWinStatus=(currentClass)=>{
       
      return winningCombinations.some(combination=>{
          return combination.every(index=>{
              return (cellElements[index].className===currentClass);
          })
      })  

     }
    useEffect(() => {
        
        setCellElements(cellElements.map((item, index) => {
            return document.querySelectorAll(".cell")[index];
        })
       
        );
        
        const cellX = `${"cell"} ${X_Class}`
        const cellCircle = `${"cell"} ${circle_Class}`
       const currentClass= !classTrun? cellCircle:cellX;
        if(checkWinStatus(currentClass)){
            const winner= (currentClass===cellX)? "X" :"O";
           setwinningMeessage(`${winner}  Wins..!`);
           
            setend(true);
        }else{
            setwinningMeessage("Drew");
            setend(cellElements.every(item=>{   return (item.className===cellX || item.className === cellCircle)}))
        }
    },[boardClass]);  

    const changeclassturn = () => {
        setCellElements(cellElements.map((item, index) => {
            return document.querySelectorAll(".cell")[index];
        })
        );
        changeBoardClass();
        setclassturn(!classTrun);
      
    }
    const changeBoardClass=  ()=>{
        const boardX = `${board} ${X_Class}`
        const boardCircle = `${board} ${circle_Class}`
        setboardClass(!classTrun ? boardCircle : boardX);
    }
    
    
  const restart=()=>{
     
      setend(!end);
      setclassturn(false);
      setboardClass(board);
    setCellElements([...new Array(9).fill(Math.random())]); 
  }
   
    return (
        <Fragment>
            <h1 style={{textAlign:"center"}}>Tik tac Toe</h1>
           {
         end ? <Winpage restart={restart} text={winningMessage}/>:<Board clname={boardClass} cellElements={cellElements} classturn={classTrun} chageclassturn={changeclassturn} />
        
           } </Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector("#app-root"))