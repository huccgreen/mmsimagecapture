
import React, { useState, useRef,useEffect } from "react";
import PictureItemComponent from "./PictureItemComponent";


const PicturesComponent = () => {
  
  const [allPictures , setAllPictures] = useState();

  useEffect(()=>{
    const fetched = JSON.parse(localStorage.getItem("key"));
    //console.log(fetched.allImages.photos)
    setAllPictures(fetched.allImages.photos);
    console.log(allPictures);
    

  },[]);

  return (<>

  {allPictures ? allPictures.map((pic,index)=>{return(
    <div key={index}>
    <img src={pic} alt='preview' onClick = {()=>alert("Going to the list")} />
    <label> A Picture Above</label>
  </div>
  )})
  
  : <div> empty</div>
  }
    
 
  
  </>
 
  );
}

export default PicturesComponent;