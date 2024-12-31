import React, { useCallback, useRef } from 'react'
import certificate from '../assets/certficate.png'
import { toPng } from 'html-to-image';

export default function Certificate() {
  const data = JSON.parse(localStorage.getItem("formData"))
  const ref = useRef(null);
  const DownloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "My certificate";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.log(err));
  }, [ref]);
  return (
    <>
      <div className="relative overflow-hidden" ref={ref}>
        <div>
          <img src={certificate} alt="Certificate" width={"50%"} className="m-auto" />
        </div>
        <div className="absolute top-[30%] left-[42%]">
          <h1 className="text-teal-700 font-bold text-5xl">{data.name}</h1>
        </div>
        <div className="rounded-full h-44 w-44 flex justify-center absolute top-11 right-[27.5%]">
          <img src={data.profile} alt="Profile" className="rounded-full object-fill" />
        </div>
        <div className="absolute w-full top-[30%] left-[30%]">
          <img src={data.qrImage} alt="QR Code" width={"5%"} />
        </div>
      </div>
      <button
        className="mt-5 bg-blue-700 text-white py-2 px-3 rounded-lg"
        onClick={DownloadImage}
      >
        Download
      </button>
    </>
  );
};