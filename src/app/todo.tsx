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
      <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="text-primary px-3 py-3 rounded-s-lg" placeholder="Add task... " onChange={handleAddTask}/>
      <button type="button" className="btn-primary rounded-e-md py-3 px-4" onClick={addTask}>
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