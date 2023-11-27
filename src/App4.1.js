import "./App.css";
import { useState } from 'react';
// const [state, setState] = useState (InitialValue);

function ClickMe(){
  const onUserClick=()=> console.log("Clicked 👆🏻");
  return <button onClick={ onUserClick}>Click me</button>
}
export default ClickMe;