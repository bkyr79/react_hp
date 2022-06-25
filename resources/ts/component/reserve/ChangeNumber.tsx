import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { NumberOrders } from "./SpecifyReceivingDate";

// @ts-ignore
const ChangeNumber = (): JSX.Element => {

  const navigation = useNavigate();
  const showDetail = () => navigation('/detail');

  const { number, setNumber } = useContext(NumberOrders);

  const countUp = () => {
    setNumber(number + 1);
  };

  const countDown = () => {
    setNumber(number - 1);
    // マイナス個数が表示されないようにする
    if(number <= 0){
      setNumber(0)
    }
  };

  const countReset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>{number}</h1>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        style={{ margin: "5px", fontSize: "20px", padding: "0" }}
        onClick={countUp}
      >
        +
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ margin: "5px", fontSize: "20px", padding: "0" }}
        onClick={countDown}
      >
        -
      </Button>
      <Button
        size="medium"
        variant="contained"
        onClick={countReset}
        style={{ margin: "5px", width: "135px" }}
      >
        reset
      </Button>
    </div>
  );
}

export default ChangeNumber