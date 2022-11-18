import React, { useState } from "react";
import "./../../style.css";

const Dictionary = () => {
  const [input, onChangeInput] = useState("");
  const [def, setDef] = useState("");
  const [example, setExample] = useState("");

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  async function getWordDefination() {
    try {
      if (input.length > 0) {
        const EndURl = URL + input;
        let data = await fetch(EndURl).then((res) => res.json());
        setDef(data[0].meanings[0].definitions[0].definition);
        setExample(data[0].meanings[0].definitions[0].example);
        console.log(data[0].meanings[0].definitions);
      } else {
        alert("Enter any word");
      }
    } catch {
      alert("Didn't find that word");
      console.log("error");
    }
  }

  return (
    <div>
      <input
        className="inputText"
        type="text"
        value={input}
        onChange={(e) => {
          onChangeInput(e.target.value);
        }}
        placeholder="enter any word"
      ></input>
      <br />
      <button className="Check" onClick={getWordDefination}>
        Check
      </button>
      <br />
      <p> Meaning : {def}</p>
      <p>Example : {example}</p>
    </div>
  );
};
export default Dictionary;
