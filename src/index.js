import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Application = () => {
  const [name, setName] = useState();

  const Button = () => {
    const resetForm = () => { setName('') };
    return <button onClick={resetForm}>RESET</button>;
  };

  return (
    <main>
      <input
        value={name || ""}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Type Your Name"
      />
      <Button/>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
