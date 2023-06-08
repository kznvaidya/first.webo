import './custom_button.css'
import React from 'react'

function CustomButton(props){
    const onPressed = (event)=>{
        console.log('button clicked on pressed:',event)
    }
    
    return(
        
        <button id={props.id} onClick={props.onClick}
         className={`btn ${props.colorClass}`}>
         {props.title}
         {
            props.Showicon ?
            <span style={{marginLeft:"10px"}}></span>
            :
            <span></span>

         }
         {
            props.Showicon && <span class="material-symbols-outlined">
            download
            </span>
         }
         
         </button>
    )
}

export default CustomButton