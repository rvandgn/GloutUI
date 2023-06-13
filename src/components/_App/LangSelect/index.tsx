import { IconBrandHtml5, IconBrandReact, IconBrandCss3 } from "@tabler/icons";
import { useLanguageSelector } from "hooks";
import "./styles.css";

export default function LangSelect() {
  const { languages, setLanguages } = useLanguageSelector();
  return (
    <div className="lang-select">
      <div
        className="tooltip flex items-center"
        onClick={() => setLanguages({ html: false, jsx: true, css: false })}
      >
        <IconBrandReact
          color="#545454"
          stroke={1.2}
          className={`hover:stroke-third duration-100 ${
            languages.jsx && "stroke-third"
          }`}
        />
        <div className="tip">REACT</div>
      </div>
      <div
        className="tooltip flex items-center"
        onClick={() => setLanguages({ html: true, jsx: false, css: false })}
      >
        <IconBrandHtml5
          color="#545454"
          stroke={1.2}
          className={`hover:stroke-third duration-100 ${
            languages.html && "stroke-third"
          }`}
        />
        <div className="tip">HTML</div>
      </div>
      <div
        className="tooltip flex items-center"
        onClick={() => setLanguages({ html: false, jsx: false, css: true })}
      >
        <IconBrandCss3
          color="#545454"
          stroke={1.2}
          className={`hover:stroke-third duration-100 ${
            languages.css && "stroke-third"
          }`}
        />
        <div className="tip">CSS</div>
      </div>
    </div>
  );
}