import React from "react";
import "./styles.css";

function Main({ children } : { children: React.ReactNode }) {
  return <div className={`main-width h-full flex items-center flex-col`}> {children} </div>;
}

export default Main;