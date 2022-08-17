import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [currentPictures, setCurrentPictures] = useState([]);
	const [previewPic, setPreviewPic] = useState();

	return <AppContext.Provider value={{ currentPictures, setCurrentPictures, previewPic, setPreviewPic }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
