import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [name, setName] = useState("")
    const [profile, setProfile] = useState("")
    const [qrImage, setQrImage] = useState("")
    const navigate = useNavigate()

    const handleFileChange = (e, setState) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setState(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        const formData = { name, profile, qrImage }
        localStorage.setItem("formData", JSON.stringify(formData))
        navigate('/certificate')
    }
    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={HandleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="profile" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setProfile)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="qrImage" className="block text-sm font-medium text-gray-700">QR Code Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setQrImage)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}