import React, { Fragment } from "react"
import Button from "./Button"

const Wingpage=(props)=>{
    return(
        <Fragment>
           <div className={"show winning-message"} style={props.style} >
               {props.text}
               <Button  onclicked={props.restart} text={"Restart"}/>
               </div> 
        </Fragment>
    )
}

export default Wingpage;