import { useContext } from "react";
import { Context } from "services/context/languageSelector";

export const useLanguageSelector = () => useContext(Context);