import React, { useEffect, useState } from 'react';

const StudentForm = () => {
  // to get data from Local Storage
  const getDataFromLocalStorage = ()=>{
    let list = JSON.parse(localStorage.getItem("StudentForm"))
    console.log(list)
    if(list){
      return JSON.parse(localStorage.getItem("StudentForm"))
    }
    else{
      return []
    }
  }
  let studentFormObj ={
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    select:'',
    gender:''
  }
  const [formData, setFormData] = useState(studentFormObj);
  const {firstName, lastName, email, password, select, gender} = formData
  const [items, setItems] = useState(getDataFromLocalStorage());
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // add to Local Storage
  useEffect(()=>{
    localStorage.setItem("StudentForm", JSON.stringify(items))
  },[items])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted.');
    console.log(formData)
    setItems([...items, formData])
    setFormData(studentFormObj)
  };
  return (
    <div className="complaint-form-container">
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full name <span>*</span></label>
          <div className="name-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email <span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password <span>*</span></label>
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Select</label>
          <select name='select' value={select} onChange={handleChange}>
            <option value="Freshman">Select</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gender</label>
          <div className='gender-group'>
             <label className='d-flex fw-semibold'>Male<input type="radio" className='ms-3 mt-1' name='gender' value={'Male'}  checked={gender === 'Male'} onChange={handleChange} /></label>
             <label className='d-flex fw-semibold'>Female<input type="radio" className='ms-3 mt-1' name='gender' value={'Female'}  checked={gender ==='Female'} onChange={handleChange} /></label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default StudentForm;