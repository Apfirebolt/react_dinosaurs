import { useState } from "react";
import MDEditor, { commands } from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="container">
      <h2>Markdown Editor</h2>  
      <MDEditor
        value={value}
        onChange={(val) => setValue(val || "")}
        preview="edit"
        components={{
          toolbar: (command, disabled, executeCommand) => {
            if (command.keyCommand === 'code') {
              return (
                <button 
                  aria-label="Insert code"
                  disabled={disabled}
                  onClick={(evn) => {
                    evn.stopPropagation();
                    executeCommand(command, command.groupName)
                  }}
                >
                  Code
                </button>
              )
            }
          }
        }}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}