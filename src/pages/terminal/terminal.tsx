import React, { useEffect, useRef, useState } from 'react';
import './terminal.css';
import Axios from "axios";

function getCommand(){
  
}

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (inputref.current !== null) {
      inputref.current.focus();
    }
  })
  const fetchGetCommand = () => {
    let newOutput = "";
    newOutput = output + "\n" + "$" + input + "\n";
    Axios.get("https://localhost:44343/api/Command/cmd?command=" + input).then((res) => {
      console.log(res.data);
      newOutput += res.data;
      setOutput(newOutput);
      setInput("")
    });          
  }
  
    return (
      <div 
      className="Terminal"
      onClick={()=>{
        const input = document.getElementById("input");
        input?.focus();
      }}
      >
        <div className="terminal">
          {output}
        </div>
        <input 
          ref={inputref}
          type='text'
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e =>{
            if(e.key === "Enter"){
              fetchGetCommand();
            }
          }}
          />
        
      </div>
    );
  }
  
  export default Terminal;