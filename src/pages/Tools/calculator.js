import React, { useState, useEffect } from "react";

function Caluculator() {
  const [sum, setSum] = React.useState(0);
  const [diff, setDiff] = React.useState(0);
  const [clear, setClear] = React.useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.querySelector("#result").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum + parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Subtract = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum - parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Multiply = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum * parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Divide = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum % parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum:", sum);
    document.querySelector("form").reset();
    setClear(true);
    setSum(0);
  };

  return (
    <div className="Calculator">
      <div className="calculator-title">
        <h1>Calculator</h1>
      </div>
      <form>
        <input
          type="text"
          id="result"
          value={sum}
          onChange={(e) => {
            setSum(e.target.value);
          }}
        />
        <input type="text" id="num" placeholder="enter a number" /> <br></br>
        <button onClick={Add}>+</button>
        <button onClick={Subtract}>-</button>
        <button onClick={Multiply}>*</button>
        <button onClick={Divide}>%</button>
        <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}
export default Caluculator;
