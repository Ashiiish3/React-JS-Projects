import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

export default function Images() {
  const [photosArray, setPhotosArray] = useState([]);
  const [ready, setReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 10;
  const getPhotos = async () => {
    try {
      let responsive = await axios.get('https://api.unsplash.com/photos/random/?client_id=osvC4CFIy9TQtImOfc_eA-GTn5r7RoKRA-SmKpPgRkE&count=10')
      setPhotosArray((prevPhotos) => [...prevPhotos, ...responsive.data]);
      setReady(true);
    } catch (error) {
      console.error(error);
    }
  };
  const imageLoader = () => {
    setImagesLoaded((prev) => prev + 1);
    if (imagesLoaded + 1 === totalImages) {
      setReady(true);
      setImagesLoaded(0);
    }
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY >= document.body.offsetHeight - 2000 && ready) {
      setReady(false);
      // more images loading...."
      getPhotos();
    }
  }, [ready]);

  useEffect(() => {
    getPhotos();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <div>
      <h1 className='text-4xl font-bold bg-teal-500 text-white p-4 sticky top-0 mb-3'>Infinite Scroll Project</h1>
      <div id="imgcontainer">
      {photosArray.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description}
          onLoad={imageLoader}
          className='w-[20%] h-[20%] m-auto my-5'
        />
      ))}
    </div>
    </div>
  )
}