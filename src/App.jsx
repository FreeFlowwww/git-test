import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const reset = ()=>{
    setText("")
  }
  return (
    <>
      
        <input type="text" name="texte" defaultValue="" onChange={handleChange} />
        <button onClick={reset} >reset</button>
      
      <p>{text}</p>
    </>
  );
}

export default App;
