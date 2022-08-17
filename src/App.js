import { AppProvider } from './appContext/AppContext';
import PicturesComponent from './Components/PicturesComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebcamComponent from './Components/CameraComponent';

const App = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes >

					<Route path="/" element={<WebcamComponent />} />
					<Route path="/Pictures" element={<PicturesComponent />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
};

export default App;
