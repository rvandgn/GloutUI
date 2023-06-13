import { useDeviceSizeSelector } from "hooks";
import React from "react";

function Preview({ template }: { template: string }) {
  const { deviceSize } = useDeviceSizeSelector();
  return <div className={`w-max h-max border-[1.8px] border-secondary border-dashed relative top-28 p-2 [&>div]:box-content ${deviceSize} flex justify-center`} dangerouslySetInnerHTML={{__html: template}} />;
}

export default Preview;