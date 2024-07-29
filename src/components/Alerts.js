import React from 'react'


export default function Alerts(props) {
    const convertFirstChartToUppercase=(word)=>{
    const c=word.charAt(0);
    return c.toUpperCase()+word.slice(1);
  
      }
  return ( 
    <div >
      {props.Alert && (
        <div  className={`alert alert-${props.Alert.typ} alert-dismissible`} role="alert">
          <strong>{convertFirstChartToUppercase(props.Alert.typ)}</strong>: {props.Alert.msg}
        </div>
      )}
    </div>
  )
}
