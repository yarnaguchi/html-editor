import { ChangeEvent, FC, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./App.css";

export const App: FC = () => {
  const [code, setCode] = useState<string>(
    "<p>abcde</p>\n<button>button</button>"
  );

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  // https://ja.react.dev/reference/react-dom/components/textarea
  return (
    <div className="container">
      {/* シンプルな <textarea> でのエディタ */}
      <textarea value={code} onChange={onChange} rows={5} cols={33} />

      {/*
      これは遊びでやってみただけ。
      これを使うと npm run start で警告が出てるのが気になる。
      他のライブラリを使うなら「react syntax highlighter」でググるといいかも。
      */}
      <CodeEditor
        className="code-editor"
        value={code}
        language="html"
        onChange={onChange}
        padding={10}
      />

      {/* <iframe> はうまく内部のhtmlを更新できなかったのでやめた */}
      <div className="preview" dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
};

export default App;
