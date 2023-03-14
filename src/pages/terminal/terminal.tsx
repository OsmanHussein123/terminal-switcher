import React, { useEffect, useRef, useState } from 'react';
import './terminal.css';


function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (inputref.current !== null) {
      inputref.current.focus();
    }
  })
    return (
      <div className="Terminal">
        <input 
          ref={inputref}
          type='text'
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e =>{
            if(e.key === "Enter"){
              let newOutput = "";
              newOutput = output + "\n" + "$" + input + "\n";
              switch (input){
                case "ls":
                  newOutput += "list of projext";
                  break;
                case "pwd":
                  newOutput += "user";
                  break;
                default:
                  newOutput += "unkow command";
              }
              setOutput(newOutput);
              setInput("")
            }
          }}
          />
        <div className="terminal">
          {output}
        </div>
      </div>
    );
  }
  
  export default Terminal;