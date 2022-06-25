// @ts-nocheck
import React, {useState, useCallback, useContext} from 'react'
import ModalWindow from './ModalWindow'
import Margin from './Margin'
import Button from './Button'
import ChangeNumber from './ChangeNumber'
import axios from 'axios';
import { ModalOpen } from "./MenuDetail";


type Number = {
  number: number,
  setNumber: (number) => void 
};

// ChangeNumberコンポーネントで使う変数
// 注文数
export const NumberOrders = React.createContext<Number>();

const SpecifyReceivingDate = (): JSX.Element => {

  const [isShow, setIsShow] = useState(true);
  const { setIsModalOpen } = useContext(ModalOpen)

  // モーダルを閉じ、開く前の状態に戻す
  // (=初期状態を保つのにリロードを不要にする)
  const restoreDefault = () => {
    setIsShow(false);
    setIsModalOpen(false);
  }
  const handleClick = useCallback(restoreDefault, []);

  const buttonTheme = {
    background: "orange",
    color: "#ffffff"
  };

  const buttonSize = {
    fontSize: "1vmin",
    padding: "2vmin 4vmin"
  };    

  const [number, setNumber] = useState(0);
  const value = {
    number,
    setNumber
  }
  
  const hamburg_steak = {
    ordering_details88: '・ハンバーグステーキ',
    count:             '・' + value.number + '個'
  }

  const SendLineMessage = (order: any) => {
    axios.post('/sendLineMessage', order)
    .then(function (data) {        
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // LINEメッセージで注文名と注文数を送る
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
        <NumberOrders.Provider value={value}>
          <ChangeNumber />
        </NumberOrders.Provider>

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