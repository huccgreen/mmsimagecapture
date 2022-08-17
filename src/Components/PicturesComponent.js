
import React, { useContext } from "react";

import { AppContext } from "../appContext/AppContext";


const PicturesComponent = () => {


  const { currentPictures, setCurrentPictures } = useContext(AppContext);


  const deleteItem = (myItem) => {
    var tempItems = [...currentPictures].filter((currentPicture) => currentPicture !== myItem);
    setCurrentPictures(tempItems);
  };

  return (<>

    {currentPictures && currentPictures.map((pic, index) => {
      return (
        <div key={index} className="w-full justify-center bg-white px-8">

          <div className="flex w-full justify-evenly items-center m-8" >

            < img src={pic.image} alt='preview' className="w-3/5" />

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <label className="">  {pic.date}</label>


            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" onClick={() => deleteItem(pic)} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>

          </div>
        </div >
      )
    })

    }

    {currentPictures.length < 1 && <div> The List is Empty</div>}
  </>

  );
}

export default PicturesComponent;