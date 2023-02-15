/* eslint-disable */
import React, { createContext, useEffect, useState } from "react";



type LangContextType = {
	language:string; 
	setLanguage: (value:string)=>void;
	darkTheme:string;
};
type AuthProps = {
	children: React.ReactNode
};


export const LanguageContext = createContext({} as LangContextType);

export const MenuOptionLanguageProvider = ({ children }: AuthProps)=> {
	const [language, setLanguage] = useState<string>("pt");
    const [darkTheme, setDarkTheme] = useState<string>("");

	useEffect(() => {
		const languageStore = localStorage.getItem("language");
		if (languageStore) {
			setLanguage(languageStore);
		}
	},[]);
	return (
		<LanguageContext.Provider value={{language, setLanguage, darkTheme }}>
			{children}
		</LanguageContext.Provider>
	);
};


