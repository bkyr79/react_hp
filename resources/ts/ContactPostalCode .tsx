import React, { useState } from "react";

const ContactPostalCode = ( props: {
    oya: string;
  } ): JSX.Element => {
  const [moji, setMoji] = useState(props.oya);

  const formInput: {
    outline: string;
    fontFamily: string;
    display: string;
    border: string;
    borderRadius: string;
    height: string;
    fontSize: string;
    color: string;
    boxSizing: 'border-box';
    width: string;
    paddingLeft: string;
  } = {
    outline: 'none',
    fontFamily: 'system-ui',
    display: 'block',
    border: '3px solid #f6f5f4',
    borderRadius: '4px',
    height: '34px',
    fontSize: '15px',
    color: '#777',
    boxSizing: 'border-box',
    width: '130%',
    paddingLeft: '5px'
  }

  const addMoji = () => setMoji(moji + 'お尻に文字を足します！');

  return (
  <>
    <h2>props.oyaの中身: { moji }</h2>
    <button onClick={addMoji}>+</button>
    <input type="text" style={formInput}/>
  </>
  )
}

export default ContactPostalCode;