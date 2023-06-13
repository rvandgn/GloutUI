import React, { createContext, useState } from "react";

interface ContextInterface {
  deviceSize: string;
  setDeviceSize: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextInterface>({
  deviceSize: "",
  setDeviceSize: () => {},
});

export default function DeviceSizeSelectorProvider({ children }: { children: React.ReactNode }) {
  const [deviceSize, setDeviceSize] = useState<string>("[&>div]:w-96");
  const data: ContextInterface = {
    deviceSize,
    setDeviceSize,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}