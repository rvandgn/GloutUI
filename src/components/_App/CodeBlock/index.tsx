import { CodeBlock as ReactCodeBlock, arta } from "react-code-blocks";
import { IconClipboardList, IconClipboardCheck } from "@tabler/icons";
import { useLanguageSelector } from "hooks";
import "./styles.css";
import { useState } from "react";

interface CodeBlockProps {
  text: string;
  language: string;
}

export default function CodeBlock({ text, language }: CodeBlockProps) {
  const [copy, setCopy] = useState<{state: boolean, text: string}>({ state: false, text: 'Copy'});
  const { languages } = useLanguageSelector();
  const languageHandler = (): string =>
    `${ 
      language === "jsx" ? `${!languages.jsx && "hidden"}` : 
      language === "html" ? `${!languages.html && "hidden"}` : 
      language === "css" ? `${!languages.css && "hidden"}`: "block"
    }`;

  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopy({ state: true, text: 'Copied!'});
    setTimeout(() => setCopy({ state: false, text: 'Copy'}), 1000);
  }

  return (
    <div className={`code-block relative ${languageHandler()}`}>
      <div className="tooltip absolute top-3 right-3">
        <IconClipboardList
          stroke={1.2}
          className={`stroke-fourth hover:stroke-third duration-100 w-6 ${
            copy.state ? "hidden" : "block"
          }`}
          onClick={() => copyHandler(text)}
        />
        <IconClipboardCheck
          stroke={1.2}
          className={`stroke-third duration-100 w-6 ${
            copy.state ? "block" : "hidden"
          }`}
        />
        <div className="tip">{copy.text}</div>
      </div>
      <ReactCodeBlock text={text} language={language} theme={arta} />
    </div>
  );
}
