import { useState } from "react";
import { PropTypes } from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const Contador = () => {
    setCounter((c) => c + 1);
  };

  const Restar = () => {
    setCounter((c) => c - 1);
  };

  const Reset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={Contador}>Counter +1</button>
      <button onClick={Restar}>Counter -1</button>
      <button onClick={Reset}>Counter Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
