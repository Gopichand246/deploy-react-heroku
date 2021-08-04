import React, { useEffect, useState } from 'react'

function TypeWriter (props) {

    const [blink,setBlink] =useState(true);
    const text = props.text
    const [index,setIndex] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            if(blink){
                setBlink(false)
            }
            else{
                setBlink(true)
            }
        },500)
    },[blink])

    useEffect(()=>{
        setTimeout(()=>{
            setIndex(index+1)
        },150)
    },[index])

    return (
        <div className= "typeWriter">
            <h1> Hello there!</h1>
        <h1> {
            `${text.substring(0,index)}${blink?'|':' '}`
        }</h1>
        </div>
    )
}

export default TypeWriter

