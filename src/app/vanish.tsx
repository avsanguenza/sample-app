'use client'
import { useState } from "react"
function Vanish(){
const [text, setText] = useState(true)

function vanishOrAppear(state : boolean){
  const x = (document.getElementById('textItem') as HTMLElement)
  setText(state ? false: true);
  return (
    x.style.display = state ? "none" : "block"
  )
}

return(

 <div className="flex flex-col text-center items-center gap-y-3">
  <div>
  <h2 className=" text-xl font-bold">Vanish</h2>
  </div>
 <div id="textItem" className="">
  <h1 className="text-2xl font-semibold">Make this Vanish</h1>

  </div>
  <div className="">
  <button type="button" className="btn-primary rounded-lg" onClick={()=>{vanishOrAppear(text)}}>{text ? "Click me!": "Reset"}</button>

  </div>
 </div>

)
}
export default Vanish;


