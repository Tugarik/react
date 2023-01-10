import { useState } from "react";
import "./styles/calculator.css";
import Buttons from "./Buttons";

export default function Calculator() {
  const [val, setVal] = useState("");
  const signs = ["+", "-", "*", "/", "%", "."];

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <hr />
      <input
        className="screen"
        onChange={(e) => {
          setVal(e.target.value);
        }}
        type="text"
        value={val}
        placeholder="0"
      />
      <div className="buttons">
        <button className="btn" onClick={numClick} value="1">
          1
        </button>
        <button className="btn" onClick={numClick} value="2">
          2
        </button>
        <button className="btn" onClick={numClick} value="3">
          3
        </button>
        <button className="btn" onClick={signClick} value="+">
          +
        </button>
        <button className="btn" onClick={numClick} value="4">
          4
        </button>
        <button className="btn" onClick={numClick} value="5">
          5
        </button>
        <button className="btn" onClick={numClick} value="6">
          6
        </button>
        <button className="btn" onClick={signClick} value="-">
          -
        </button>
        <button className="btn" onClick={numClick} value="7">
          7
        </button>
        <button className="btn" onClick={numClick} value="8">
          8
        </button>
        <button className="btn" onClick={numClick} value="9">
          9
        </button>
        <button className="btn" onClick={signClick} value="*">
          *
        </button>
        <button className="btn" onClick={signClick} value="%">
          %
        </button>
        <button className="btn" onClick={numClick} value="0">
          0
        </button>
        <button className="btn" onClick={signClick} value=".">
          .
        </button>
        <button className="btn" onClick={signClick} value="/">
          /
        </button>
        <button className="btn" onClick={() => setVal("")}>
          C
        </button>
        <button className="btn" onClick={delClick}>
          Del
        </button>
        <button className="btn" onClick={markClick}>
          -/+
        </button>
        <button className="btn" onClick={resultClick}>
          =
        </button>
      </div>
    </div>
  );

  //functions
  function isSign() {
    let res = false;
    signs.map((sign) => {
      if (val.charAt(val.length - 1) == sign) {
        res = true;
      }
    });
    return res;
  }

  function numClick(e) {
    e.preventDefault();
    val == "0" ? setVal(e.target.value) : setVal(val + e.target.value);
  }

  function signClick(e) {
    // e.preventDefault();
    isSign()
      ? setVal(val.replace(val.charAt(val.length - 1), e.target.value))
      : setVal(val + e.target.value);
  }

  function delClick(e) {
    e.preventDefault();
    val.length > 1 ? setVal(val.substring(0, val.length - 1)) : setVal("");
  }

  function markClick(e) {
    e.preventDefault();
    isSign()
      ? setVal("" + (0 - eval(`${val.substring(0, val.length - 1)}`)))
      : setVal("" + (0 - eval(`${val}`)));
  }

  function resultClick(e) {
    e.preventDefault();
    isSign()
      ? setVal("" + eval(`${val.substring(0, val.length - 1)}`))
      : setVal("" + eval(`${val}`));
  }
}
