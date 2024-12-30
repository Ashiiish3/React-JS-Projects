import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [name, setName] = useState("")
    const [profile, setProfile] = useState("")
    const [qrImage, setQrImage] = useState("")
    const navigate = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault()
        const formData = {name, profile, qrImage}
        localStorage.setItem("formData", JSON.stringify(formData))
        navigate('/certificate')
    }
    return (
        <div>
            <form action="" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="file" onChange={(e) => setProfile(e.target.files[0].name)} />
                </div>
                <div>
                    <input type="file" onChange={(e) => setQrImage(e.target.files[0].name)} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
