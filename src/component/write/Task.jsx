import React, { useState } from "react";
const converter = require("number-to-words");

const Task = () => {
  const [input, setinput] = useState("");
  const [handleResult, sethandleResult] = useState("");

  const handleUpdate = (event) => {
    event.preventDefault();
    sethandleResult(converter.toWords(input));
    setinput("");
  };

  return (
    <form>
      <h1>{handleResult.toUpperCase()}</h1>
      <input
        type="text"
        onChange={(e) => setinput(e.target.value)}
        value={input}
      />
      <button type="submit" onClick={handleUpdate}>
        Submit
      </button>
    </form>
  );
};

export default Task;
