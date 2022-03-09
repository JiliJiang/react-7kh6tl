import React, {useState, useEffect} from "react";
import "./style.css";



export default function App() {

  function setStyles(input){
    switch(input.toLowerCase()){
      case "jili": return "orange";
      case "joe": return "red";
      case "brian": return "blue";
      case "amy": return "pink";
      default: return "black"
    }
  }
  

  const [color, setColor] = useState ("black");
  const [name, setName] = useState ('');

  useEffect(()=>{    
    
    const myColor = setStyles(name);
    setColor(myColor)

  },[name])


  return (
    <div>
      <h1>React Exercise One</h1>
      
      <label>
        Please input your name here:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
      setName(e.target.value)
      
    }}
      />
      </label>

      <h2 >
        Hello, my name is   
      </h2>
      <h1 style={{color: color}}>
        {name}
      </h1>
    

    </div>
  );
}
