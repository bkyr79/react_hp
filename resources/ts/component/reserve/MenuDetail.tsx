import React, {useState, useCallback} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SpecifyReceivingDate from "./SpecifyReceivingDate";


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

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
  <>
    <img src="https://www.saizeriya.co.jp/menu/colorbox/images/photo03.jpg" alt="" />
    <p>この商品の詳細です</p>
    {/* <button style={{marginRight:'2px'}} onClick={SendLineMessageH}>注文する</button> */}
    <button style={{marginRight:'2px'}} onClick={openModal}>注文する</button>
    
    {/* <SpecifyReceivingDate /> */}
    {/* @ts-ignore */}
    {isModalOpen? <SpecifyReceivingDate onClick = {()=>{closeModal()}}/> :""}

  </>
  )
}

export default MenuDetail

// // 親コンポーネント
// export default function Modal_FunctionComponent(){

  // function closeModal(){
  //   setIsModalOpen(false)
  // }

//   // -----2------
//   const[isModalOpen,setIsModalOpen]=useState(false)
//   // ---↑追加----

//   // -----3------
//   function openModal(){
//     setIsModalOpen(true)
//   }
//   // ---↑追加----

//   return (
//     <div className="modalpage">
//       <h2>関数コンポーネント</h2>
//       // -----4------
//       <button onClick={()=>{openModal()}}>モーダルを開く</button>
//       // ---↑修正----

//       // -----5------
//       {isModalOpen? <Modal onClick={()=>{closeModal()}}/> :""}
//       // ---↑修正----
//     </div>
//   );
// }
// }
