import { AppProvider } from "./appContext/AppContext";
import CameraComponent from "./Components/CameraComponent";
import PicturesComponent from "./Components/PicturesComponent"
import {  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";


const App = () => {


  return (
   
      <BrowserRouter>
       <AppProvider>
      <Routes>
        <Route path="/" element={<CameraComponent/>} />
        <Route path="/Pictures" element={<PicturesComponent />} />
        </Routes>
        </AppProvider>
      </BrowserRouter>
     



  
  );
}

export default App;