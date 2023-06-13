import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import "./styles.css";

interface SidebarProps {
  title: string;
  sidebarType: string;
  width: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ title, sidebarType, width, children }) => {
  return (
    <div className={`sidebar container-limit ${width}`}>
      <div className={"up-area"}>
        {sidebarType === "components" && (
          <div className="relative tooltip flex items-center">
            <div className="tip"> Home </div>
            <ArrowSmallLeftIcon className="h-5 w-5 text-fourth hover:text-[#7e7e7e] cursor-pointer duration-100 ease-linear" />
          </div>
        )}
        <h3 className="text-third">{title}</h3>
        {sidebarType === "code" && (
          <CodeBracketSquareIcon className="h-5 w-5 text-fourth absolute right-3" />
        )}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;