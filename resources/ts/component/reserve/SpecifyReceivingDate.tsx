// @ts-nocheck
import React, {useState, useCallback} from 'react'
import ModalWindow from './ModalWindow'
import Margin from './Margin'
import Button from './Button'

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
					<Button onClick={handleClick} theme={buttonTheme} size={buttonSize}>
						はい
					</Button>
				</Margin>
			</ModalWindow>
    </>
  )
}

export default SpecifyReceivingDate