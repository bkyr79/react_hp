import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LineMessage: (props: any) => JSX.Element = props => {

  const order = {
    // 注文内容（後々、予約画面でユーザーが選択したものを取得できるようにする）
    ordering_details: '・ミラノ風ドリア',
    ordering_details2: '・辛味チキン'
  } 

  const SendLineMessage = (e: any) => {
    e.preventDefault();
      axios.post('/sendLineMessage', order)
      .then(function (data) {        
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <button onClick={SendLineMessage}>予約確定ボタン</button>
    </>
  )
}

export default LineMessage