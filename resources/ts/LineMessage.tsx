import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LineMessage: (props: any) => JSX.Element = props => {

  // この変数はのちに削除する
  const order = {
    // 注文内容（後々、予約画面でユーザーが選択したものを取得できるようにする）
    ordering_details: '・ミラノ風ドリア',
    ordering_details2: '・辛味チキン'
  }
  
  const hamburg_steak = { ordering_details88: '・ハンバーグステーキ' }
  const pepe = { ordering_details88: '・ペペロンチーノ' }
  const ice_cream = { ordering_details88: '・ジェラート' }

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

  const SendLineMessage2 = (order: any) => {
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
      {/* <button onClick={SendLineMessage}>予約確定ボタン</button> */}
      <button style={{marginRight:'2px'}} onClick={() => SendLineMessage2(hamburg_steak)}>ハンバーグステーキ</button>
      <button style={{marginRight:'2px'}} onClick={() => SendLineMessage2(pepe)}>ペペロンチーノ</button>
      <button style={{marginRight:'2px'}} onClick={() => SendLineMessage2(ice_cream)}>ジェラート</button>
    </>
  )
}

export default LineMessage