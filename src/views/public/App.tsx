import Main from "components/_App/Main";
import Navbar from "components/_App/Navbar";
import Sidebar from "components/_App/Sidebar";
import LangSelect from "components/_App/LangSelect";
import ContextMenu from "components/ContextMenu";
import Preview from "components/_App/Preview";
import CodeBlock from "components/_App/CodeBlock";
import LanguageSelectorProvider from "services/context/languageSelector";
import DeviceSizeSelectorProvider from "services/context/deviceSizeSelector";
import { useScreenWidth } from "hooks";
import { ComponentInformation } from "examples";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import "./styles.css";

export default function App() {
  const { name, code, jsx } = ComponentInformation();
  const { deviceWidth } = useScreenWidth();
  return (
    <div
      className={`app bg-circle-effect [&>#warning-information]:flex ${
        deviceWidth >= 1280
          ? "[&>#warning-information]:hidden"
          : "[&>#warning-information]:block"
      }`}
    >
      <div id="warning-information">
        <ExclamationTriangleIcon className="w-16 sm:w-24 text-[#ffffff42]" />
        <h2 className="text-fourth">
          You do not have enough screen size to view this page, please try again
          from the computer.
        </h2>
      </div>
      <Sidebar title={name} width="w-64" sidebarType="components">
      </Sidebar>
      <Main>
        <DeviceSizeSelectorProvider>
          <Navbar />
          <Preview template={code} />
        </DeviceSizeSelectorProvider>
      </Main>
      <Sidebar title="Source Code" width="w-96" sidebarType="code">
        <LanguageSelectorProvider>
          <LangSelect />
          <CodeBlock text={jsx} language="jsx" />
          <CodeBlock text={code} language="html" />
          <CodeBlock text={`/* Code CSS */`} language="css" />
        </LanguageSelectorProvider>
      </Sidebar>
      <ContextMenu />
    </div>
  );
}
