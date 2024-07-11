import React, { useState } from 'react'

export default function Login() {
    let formObj={
        email:"",
        password:""
    }
    const [formData, setFormData]= useState(formObj)
    const {email, password}= formData
    const HandleInputChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const SubmitForm =(event)=>{
        event.preventDefault()
        console.log(formData)
    }
    return (
        <div>
            <form data-testid ="auth_form" onSubmit={(event)=>SubmitForm(event)}>
                <input
                    type = "email"
                    name="email"
                    value={email}
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>HandleInputChange(e)}
                />
                <br />
                <input
                    type = "password"
                    name="password"
                    value={password}
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>HandleInputChange(e)}
                />
                <br />
                <input type = "submit"/>
            </form>                
        </div>
    )
}
