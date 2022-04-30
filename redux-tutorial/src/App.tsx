import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { depositMoney, withdrawMoney } from "./state/action-creators";
import { useAppSelector } from "./state/hook";
import {
  decrement,
  increment,
  selectCount,
} from "./state/reducers/accountReducer";

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}

export default App;
