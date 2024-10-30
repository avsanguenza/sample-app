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
  <button type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{vanishOrAppear(text)}}>{text ? "Click me!": "Reset"}</button>

  </div>
 </div>

)
}
export default Vanish;


