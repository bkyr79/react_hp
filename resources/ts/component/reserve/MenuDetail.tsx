import React from 'react'
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

  return (
  <>
    <img src="https://www.saizeriya.co.jp/menu/colorbox/images/photo03.jpg" alt="" />
    <p>この商品の詳細です</p>
    <button style={{marginRight:'2px'}} onClick={SendLineMessageH}>注文する</button>
  </>
  )
}

export default MenuDetail