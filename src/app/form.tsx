'use client'
import { useState } from "react";
function Form(){
  const [info, setInfo] = useState({
    username:'',
    name:'',
    age:''
  })
  const handleChange = (e)=>{
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const usernameElement = (document.getElementById('userNameOutput') as HTMLElement)
    const nameElement = (document.getElementById('nameOutput') as HTMLElement)
    const ageElement = (document.getElementById('ageOutput') as HTMLElement)

    usernameElement.innerHTML = info.username
    nameElement.innerHTML = info.name
    ageElement.innerHTML=info.age
    
    var form = (document.getElementById('userForm') as HTMLFormElement)
    form.reset()
  }
return(
  <div className="flex flex-col gap-y-4 items-center">
  <div>
  <h1 className=" text-xl font-bold">Form</h1>
  </div>
      <div className="">
      <form id = 'userForm'className="items-center" onSubmit={handleSubmit}>
      <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
      <input type="text" id= "username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required onChange={handleChange} />
      </div>
      <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
      <input type="text" id='name' name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required onChange={handleChange} />
      </div>
      <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age:</label>
      <input type="number" id='age'name="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age:"  required min="0" onChange={handleChange} />
      </div>
      <div className="flex items-center mb-5">  </div>
      <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      </div>

      <div id='submitInfo' className="">
        <p className="text-xl font-semibold">Submitted Info:</p>
          <p id='usernameOutput'>Username: <span id='userNameOutput'></span></p>
          <p > Name:<span  id='name' className=""><span id='nameOutput'></span></span></p>
          <p >Age:<span  id='age' className=""><span id='ageOutput'></span></span></p>
      </div>

</div>
)
}

export default Form;