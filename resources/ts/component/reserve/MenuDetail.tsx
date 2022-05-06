import React, {useState, useCallback} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const MenuDetail = (): JSX.Element => {
    
    const hamburg_steak = { ordering_details88: '・ハンバーグステーキ' }
    const pepe = { ordering_details88: '・ペペロンチーノ' }
    const ice_cream = { ordering_details88: '・ジェラート' }
    
    const SendLineMessage = (order: any) => {
        axios.post('/sendLineMessage', order)
        .then(function (data) {        
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    // 改善する必要あり！
    const SendLineMessageH = () => SendLineMessage(hamburg_steak)

    const navigation = useNavigate();
    const specifyReceivingDate = () => navigation('/specifyReceivingDate');
  return (
  <>
    <img src="https://www.saizeriya.co.jp/menu/colorbox/images/photo03.jpg" alt="" />
    <p>この商品の詳細です</p>
    {/* <button style={{marginRight:'2px'}} onClick={SendLineMessageH}>注文する</button> */}
    <button style={{marginRight:'2px'}} onClick={specifyReceivingDate}>注文する</button>
  </>
  )
}

export default MenuDetail