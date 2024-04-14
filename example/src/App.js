import { useEffect, useRef, useCallback } from 'react';
// import * as monaco from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

// import logo from './logo.svg';
import './App.css';

function App() {
  const editorRef = useRef();
  const initEditor = useCallback(() => {
    const root = document.getElementById('editor');
    if (editorRef.current) {
      editorRef.current?.dispose();
    }
    editorRef.current = monaco.editor.create(root, {
      language: 'javascript',
      // theme: 'vs-dark',
      readOnly: false,
      // contextmenu: false,c
      contextmenu: true,
      // autoIndent: 'keep',
      // automaticLayout: true,
      // showFoldingControls: 'always',
      // folding: true,
      // foldingStrategy: 'auto',
      // suggestFontSize: 13,
      // fontSize: 13,
      // fixedOverflowWidgets: true,
      // renderControlCharacters: true,
    });
  }, []);
  useEffect(() => {
    initEditor();
  }, [initEditor]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="editor" style={{ width: '100%', height: 300, border: '1px solid #000' }} />
    </div>
  );
}

export default App;
