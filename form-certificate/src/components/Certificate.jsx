import React from 'react'
import certificate from '../assets/certficate.png'

export default function Certificate() {
    const data = JSON.parse(localStorage.getItem("formData"))
    console.log(data)
  return (
    <div>
      {/* <img src={certificate} alt="" width={"50%"} /> */}
      <img src={data.Profile} alt="" width={"50%"} />
      <img src={data.qrImage} alt="" width={"50%"} />
    </div>
  )
}
