import React , {useState , useRef ,useCallback , useContext} from 'react';
import Webcam from 'react-webcam';
import {AppContext} from "../appContext/AppContext";
import { Outlet, Link } from 'react-router-dom';


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment"
  };
  
  const WebcamComponent = () => {
    const webcamRef = useRef(null);
    const [img , setImg] = useState();
    const {currentPictures , setCurrentPictures} = useContext(AppContext);
   
    const capture = useCallback(
      () => {
        const imgg = webcamRef.current.getScreenshot();
        setCurrentPictures(curr => [...curr,imgg])
        console.log

      },
      [webcamRef]
    );
    return (
      <>
        <Webcam
          audio={false}
         
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          
        />
        <button onClick={capture}>Capture photo</button>

        {currentPictures.map((pic,index)=>{return(
    <div key={index} className="w-full align-items justify-center bg-black">
      <div className="w-full align-items justify-center bg-black"> <img  src={pic} alt='preview' onClick = {()=>alert("Going to the list")} />
    <label> A Picture Above</label></div>
    
  </div>
  )})
  
 
  }

<Link to="/Pictures">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
					>
						Images
					</button>
				</Link>
      </>
    );
  };

export default WebcamComponent;
