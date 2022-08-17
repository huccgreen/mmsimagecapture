import { AppProvider } from './appContext/AppContext';
import CameraComponent from './Components/CameraComponent';
import PicturesComponent from './Components/PicturesComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebcamComponent from './Components/OtherCamera';

const App = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path="/" element={<WebcamComponent />} />
					<Route path="/Pictures" element={<PicturesComponent />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
};

export default App;
