import React, { useState, useRef, useContext, useMemo, useEffect } from 'react';
//import { MdOutlineCameraswitch } from "react-icons/md";
import { Camera } from 'react-camera-pro';
import { Outlet, Link } from 'react-router-dom';
import { AppContext } from '../appContext/AppContext';

const CameraComponent = () => {
	const camera = useRef(null);

	const [ image, setImage ] = useState();
	const [ numberOfCameras, setNumberOfCameras ] = useState(0);
	let allImages = { photos: [] };
	const [ allPictures, setAllPictures ] = useState();

	const addPhoto = (thePhoto) => {
		allImages.photos.push(thePhoto);
		const jsonString = JSON.stringify({ allImages });
		localStorage.setItem('key', jsonString);
		console.log(jsonString);
	};

	return (
		<div className="static ">
			<div className="bg-black ">
				<Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} facingMode="environment" />
			</div>
			{/* {<div className="absolute top-20 left-0">
      <img src={image} alt='Image preview' />
      </div>} */}
			<div className="absolute bottom-10 left-30 bg-transparent w-full flex justify-around items-center h-12 text-gray-200 border-y-2 py-8">
				<Link to="/Pictures">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
					>
						Images
					</button>
				</Link>
				<button
					onClick={() => {
						const photo = camera.current.takePhoto();
						addPhoto(photo);
					}}
				>
					{' '}
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

				<button
					hidden={numberOfCameras <= 1}
					onClick={() => {
						camera.current.switchCamera();
					}}
				>
					{' '}
					image.png
				</button>
			</div>
		</div>
	);
};

export default CameraComponent;
