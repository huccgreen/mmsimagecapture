import React, { useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => { 

  
   const [currentPictures , setCurrentPictures] = useState(null);
    
    return (
        <AppContext.Provider value={{ currentPictures , setCurrentPictures}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };