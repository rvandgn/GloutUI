import { useContext } from "react";
import { Context } from "services/context/deviceSizeSelector";

export const useDeviceSizeSelector = () => useContext(Context);