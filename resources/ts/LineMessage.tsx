import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LineMessage: (props: any) => JSX.Element = props => {

  const idAndMessage = {
    lineId: '@629jhpfn',
    lineMessageText: 'サンプルのメッセージです'
  } 

  const SendLineMessage = (e: any) => {
    e.preventDefault();
      axios.post('/sendLineMessage', idAndMessage)
      .then(function (data) {        
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <button onClick={SendLineMessage}>LINEでメッセージ送信</button>
    </>
  )
}

export default LineMessage