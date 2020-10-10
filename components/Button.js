import React,{Fragment} from "react"

const Button =(props)=>{
return (<button className={props.clname} style={props.style} onClick={props.onclicked}> {props.text}</button>)
}

export default Button;