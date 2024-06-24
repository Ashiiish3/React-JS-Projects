import React, { useState } from "react";
export default function Form() {
  let formObj = {
    name:"",
    email:"",
    password:"",
    city:"",
    isMarried:false
  }
  const [formData, setformData] = useState(formObj);
  const {name, email, password, city, isMarried} = formData
  const handleInputChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value })
  }
  const formSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className="form-box">
      <form onSubmit={(e)=>formSubmit(e)}>
        <h1>Form</h1>
        <input type="text" placeholder="Enter Your Name" value={name} name="name" onChange={(event)=>handleInputChange(event)} /><br />
        <input type="text" placeholder="Enter Email" value={email} name="email" onChange={(event)=>handleInputChange(event)} /><br />
        <input type="text" placeholder="Enter Password" value={password} name="password" onChange={(event)=>handleInputChange(event)} /><br />
        <select value={city} name="city" onChange={(event)=>handleInputChange(event)}>
          <option value="Select City">Select City</option>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Kachchh">Kachchh</option>
          <option value="Vadodara">Vadodara</option>
        </select> <br />
        <label>
          Male <input type="radio" name="gender" value={"Male"} onChange={(event)=>handleInputChange(event)}/>
        </label><br />
        <label>
          Female <input type="radio" name="gender" value={"Female"} onChange={(event)=>handleInputChange(event)}/>
        </label><br />
        <input
          type="checkbox"
          value={isMarried} name="isMarried"
          onChange={(event)=>handleInputChange(event)}
        /> IsMarried <br />
        <button>Submit</button>
      </form>
    </div>
  );
}