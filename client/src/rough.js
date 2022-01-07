/*   QUANTITY  PLUS MINUS LOGIC
import React, {useState} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [quant,setQuant] = useState(0);
  
  function plus(){
    var newquant = parseInt(quant) +1;
    setQuant(newquant);
    console.log(quant);
  }

  function minus(){
    var oldquant = parseInt(quant)
    if (oldquant>0){
    var newquant = oldquant -1;
    setQuant(newquant);
    }
    console.log(quant);
  }

  return (
    <div className="App">
        

        <label><svg onClick={()=>plus()} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></label>
        
        <label className="quantity">{quant}</label>

        <label><svg onClick={()=>minus()} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" className="svg-inline--fa fa-minus fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></label>

        <button onClick={()=>setQuant(0)}>RESET</button>
    </div>
  );
}

export default App;
*/