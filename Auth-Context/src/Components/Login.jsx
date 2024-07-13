import React, { useContext, useState } from 'react'
import axios from 'axios'
import { FormContext } from '../Context/AuthContextProvider'

export default function Login() {
    let formObj={
        email:"",
        password:""
    }
    const [formData, setFormData]= useState(formObj)
    const {email, password}= formData
    const {logIn} = useContext(FormContext)
    const HandleInputChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const SubmitForm =(event)=>{
        event.preventDefault()
        const PostData = async ()=>{
            try{
                let response = await axios.post("https://reqres.in/api/login",{
                    email: formData.email,
                    password: formData.password
                })
                alert("Login Successfully!")
                logIn(response.data.token)
            }
            catch(error){
                console.log(error.message)
            }
        }
        PostData()
    }
    return (
        <div className='form-box'>
            <form data-testid ="auth_form" onSubmit={(event)=>SubmitForm(event)}>
                <h1 style={{textAlign:"center", marginBottom:"15px"}}>Form</h1>
                <input
                    type = "email"
                    name="email"
                    value={email}
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>HandleInputChange(e)}
                    required
                />
                <br />
                <input
                    type = "password"
                    name="password"
                    value={password}
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>HandleInputChange(e)}
                    required
                />
                <br />
                <input type ="submit"/>
            </form>
        </div>
    )
}