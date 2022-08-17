
import React, { useState, useRef,useEffect ,useContext} from "react";
import PictureItemComponent from "./PictureItemComponent";
import {AppContext} from "../appContext/AppContext";


const PicturesComponent = () => {
  
  const [allPictures , setAllPictures] = useState([]);
  const {currentPictures , setCurrentPictures} = useContext(AppContext);

  useEffect(()=>{
    const fetched = JSON.parse(localStorage.getItem("key"));
    //console.log(fetched.allImages.photos)
    setAllPictures(fetched.allImages.photos);
    console.log(allPictures);
    

  },[]);

  return (<>

  {currentPictures ? currentPictures.map((pic,index)=>{return(
    <div key={index} className="w-full align-items justify-center bg-black">
      <div className="w-full align-items justify-center bg-black"> <img className="w-1/2" src={pic} alt='preview' onClick = {()=>alert("Going to the list")} />
    <label> A Picture Above</label></div>
    
  </div>
  )})
  
  : <div> empty</div>
  }
    
 
  
  </>
 
  );
}

export default PicturesComponent;