'use client'
import { useState } from "react";
function Form(){
  const [info, setInfo] = useState({
    username:'',
    name:'',
    age:''
  })
  const handleChange = (e:any)=>{
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    const usernameElement = (document.getElementById('userNameOutput') as HTMLElement)
    const nameElement = (document.getElementById('nameOutput') as HTMLElement)
    const ageElement = (document.getElementById('ageOutput') as HTMLElement)

    usernameElement.innerHTML = info.username
    nameElement.innerHTML = info.name
    ageElement.innerHTML=info.age
    
    const form = (document.getElementById('userForm') as HTMLFormElement)
    form.reset()
  }
return(
  <div className="flex flex-col gap-y-4 items-center">
  <div>
  <h1 className=" text-xl font-bold">Form</h1>
  </div>
      <div className="">
      <form id = 'userForm' className="items-center" onSubmit={handleSubmit}>
      <div className="mb-5">
      <label htmlFor="email" className="label-primary">Username:</label>
      <input type="text" id= "username" name="username" className="text-primary rounded-lg " placeholder="Username" required onChange={handleChange} />
      </div>
      <div className="mb-5">
      <label htmlFor="email" className="label-primary">Name:</label>
      <input type="text" id='name' name="name" className="text-primary rounded-lg " placeholder="Name" required onChange={handleChange} />
      </div>
      <div className="mb-5">
      <label htmlFor="email" className="label-primary">Age:</label>
      <input type="number" id='age'name="age" className="text-primary rounded-lg " placeholder="Age:"  required min="0" onChange={handleChange} />
      </div>
      <button type="submit" className="btn-primary rounded-lg">Submit</button>
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