import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Images() {
    const [imageData, setImageData] = useState([])
    let ready = false;
    let imagesLoaded = 0;
    let totalImages = 10;
    const imageLoader = () => {
        imagesLoaded++
        if(imagesLoaded == totalImages){
            ready = true;
            imagesLoaded=0;
            console.log("hiii")
        }
    }
    const GetData = async () => {
        try {
            let responsive = await axios.get('https://picsum.photos/v2/list?limit=10')
            // console.log(responsive.data)
            setImageData(responsive.data)
        } catch (error) {
            console.log(error)
        }
    }
    const windowScroll = () => {
        window.addEventListener("scroll", function scroll() {
            if (window.scrollY >= document.body.offsetHeight - 2000 && ready) {
              ready = false;
              console.log("more image loading....");
              GetData();
            }
          });
    }
    windowScroll()
    useEffect(()=>{
        GetData()
    },[])
  return (
    <div>
      <h1>Infinite Scrolling Project</h1>
      <div>
        {imageData.map((items, index)=>(
            <div key={index}>
                <img src={items.download_url} alt="" className='w-[50%] m-auto' onLoad={imageLoader} />
            </div>
        ))}
      </div>
    </div>
  )
}