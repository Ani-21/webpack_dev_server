import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div className={classes.container}>{counter}</div>
      <button onClick={handleIncrement}>Add</button>
    </>
  );
};
