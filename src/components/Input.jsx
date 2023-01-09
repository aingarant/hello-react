import { useState } from "react";

const Input = () => {
  const [name, setName] = useState("Type your Name");

  console.log(name);
  return (
    <>
      <input
        type="text"
        placeholder={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
