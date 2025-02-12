import { useState } from "react"


export default function Popup() {
    const [vissible,setPopupVisible]=useState(true)
    const onOkHandler=()=>
    {
        setPopupVisible(false)
  
    }
  return (
    <div>
      <p>added to cart</p>
      <button onClick={onOkHandler}>ok</button>
    </div>
  )
}
