// @ts-nocheck
import React, {useState, useCallback} from 'react'
import ModalWindow from './ModalWindow'
import Margin from './Margin'
import Button from './Button'
import axios from 'axios';


const SpecifyReceivingDate = (): JSX.Element => {
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => setIsShow(false), []);

  const buttonTheme = {
    background: "orange",
    color: "#ffffff"
  };

  const buttonSize = {
    fontSize: "1vmin",
    padding: "2vmin 4vmin"
  };    

  const hamburg_steak = { ordering_details88: '・ハンバーグステーキ' }
  const SendLineMessage = (order: any) => {
    axios.post('/sendLineMessage', order)
    .then(function (data) {        
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const SendLineMessageH = () => SendLineMessage(hamburg_steak)

  return (
    <>
      <ModalWindow
				title="注文確定"
				text="商品を購入しますか？"
				isShow={isShow}
				onClick={handleClick}
				isShowCloseButton={false}
			>
				<Margin top="2vmin" right="1vmin">
					<Button onClick={handleClick} size={buttonSize}>
						いいえ
					</Button>
				</Margin>
				<Margin top="4vmin" left="1vmin">
					<Button onClick={SendLineMessageH} theme={buttonTheme} size={buttonSize}>
						はい
					</Button>
				</Margin>
			</ModalWindow>
    </>
  )
}

export default SpecifyReceivingDate