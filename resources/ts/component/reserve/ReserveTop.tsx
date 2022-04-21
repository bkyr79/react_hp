import React from 'react'
import { useNavigate } from "react-router-dom";


const ReserveTop = (): JSX.Element => {
  const navigation = useNavigate();
  const showDetail = () => navigation('/detail');

  return (
  <>
    <img src="https://www.saizeriya.co.jp/menu/colorbox/images/photo03.jpg" alt="" />
    {/* ↓HTML問題あり。ボタン配置を調整するために、とりあえずpタグを入れている */}
    <p></p>
    <button style={{marginRight:'2px'}} onClick={showDetail}>ハンバーグステーキ</button>    
  </>
  )
}

export default ReserveTop