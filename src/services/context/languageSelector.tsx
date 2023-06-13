import React, { createContext, useState } from "react";

type languagesType = {
  css: boolean;
  jsx: boolean;
  html: boolean;
};

interface ContextInterface {
  languages: languagesType;
  setLanguages: React.Dispatch<React.SetStateAction<languagesType>>;
}

export const Context = createContext<ContextInterface>({ 
  languages: { css: false, jsx: false, html: false }, 
  setLanguages: () => {} 
});

export default function LanguageSelectorProvider({ children } : { children: React.ReactNode }) {
  const [languages, setLanguages] = useState({css: false, jsx: true, html: false});
  const data: ContextInterface = {
    languages,
    setLanguages
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}