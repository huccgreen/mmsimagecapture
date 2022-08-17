import React, { useRef, useCallback, useContext } from 'react';
import Webcam from 'react-webcam';
import { AppContext } from "../appContext/AppContext";
import { Link } from 'react-router-dom';

const WebcamComponent = () => {
  const webcamRef = useRef(null);

  const { setCurrentPictures, previewPic, setPreviewPic } = useContext(AppContext);

  const videoConstraints = {
    width: window.screen.width,
    height: window.screen.height,
    facingMode: "environment"
  };
  const capture = useCallback(
    () => {
      const imgg = webcamRef.current.getScreenshot();
      setPreviewPic(imgg);

      setCurrentPictures(curr => [...curr, { image: imgg, date: new Date().getDate() + " - " + new Date().getMonth() + " - " + new Date().getFullYear() + "_" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() }])
      console.log(JSON.stringify(new Date()))


    },
    [webcamRef]
  );
  return (
    <div className="static ">

      <Webcam
        audio={false}
        screenshotQuality={1}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}

      />

      <div className="absolute bottom-10 left-30 bg-transparent w-full flex justify-around items-center h-12 text-gray-200 border-y-2 py-8">
        <Link to="/Pictures">
          {previewPic && <img src={previewPic} className="h-12" alt='preview' />}
        </Link>
        <button
          onClick={() => {
            capture();


          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WebcamComponent;
