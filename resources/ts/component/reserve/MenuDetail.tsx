// @ts-nocheck
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SpecifyReceivingDate from "./SpecifyReceivingDate";


type Modal = {
  isModalOpen: boolean,
  setIsModalOpen: () => void 
};

export const ModalOpen = React.createContext<Modal>();

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
  const openModal = () => {
    setIsModalOpen(true)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const value = {
    isModalOpen,
    setIsModalOpen
  }

  return (
  <>
    <img src="https://www.saizeriya.co.jp/menu/colorbox/images/photo03.jpg" alt="" />
    <p>この商品の詳細です</p>
    <button style={{marginRight:'2px'}} onClick={openModal}>注文する</button>
    
    {/* @ts-ignore */}
    {isModalOpen?
      <ModalOpen.Provider value={value}>
        <SpecifyReceivingDate onClick = {()=>{closeModal()}}/>
      </ModalOpen.Provider>
    :""}

  </>
  )
}

export default MenuDetail