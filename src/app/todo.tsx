'use client'
import { useState } from "react"
function Todo(){
  const [taskString, setTaskString] = useState('');
  const handleAddTask = (event:any)=>{
    setTaskString(event.target.value)
    
    
    
  }

  const addTask = ()=>{
    const taskElement = (document.getElementById('taskList') as HTMLElement)
    const newParagraph = document.createElement('p')
    newParagraph.textContent = taskString
    taskElement.insertAdjacentElement('afterend',newParagraph)
  }

return(
 <div  className="flex flex-col text-center gap-y-4">
  <div className="text-center">
  <h1 className=" text-xl font-bold">To-do</h1>

  </div>
<div>
</div>
  <div>
    <label htmlFor="hs-trailing-button-add-on" className="sr-only">Label</label>
    <div className="flex rounded-lg shadow-sm">
      <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="px-3 py-3 border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" onChange={handleAddTask}/>
      <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={addTask}>
      Add task
      </button>
    </div>
  </div>
  <div>
    <p id='taskList'></p>
  </div>
 </div>
)
}

export default Todo;