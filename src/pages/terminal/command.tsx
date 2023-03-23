import React, { useEffect, useRef, useState } from 'react';
import './command.css';
import Axios from "axios";

function Command() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputref = useRef<HTMLInputElement>(null);
  
  useEffect(()=>{
    if (inputref.current !== null) {
      inputref.current.focus();
    }
  })

  const scrollToBottom = () => {
    inputref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const fetchGetCommand = () => {
    let newOutput = "";
    newOutput = output + "\n" + "$" + input + "\n";
    Axios.get("https://localhost:7185/api/Command/cmd?command=" + input).then((res) => {
      console.log(res.data);
      newOutput += res.data;
      setOutput(newOutput);
      setInput("")
      if(inputref.current != null){
        scrollToBottom();
      }
      
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
  
  export default Command;