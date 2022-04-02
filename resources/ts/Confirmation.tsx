import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { init, send } from '@emailjs/browser';


const content: {
  margin: string;
} = {
  margin: '0 200px'
}

const contentsBox: {
  width: string;
  marginLeft: string;
  marginRight: string;
  display: string;
  borderCollapse: 'separate';
  boxSizing: 'border-box';
  textIndent: string;
  borderSpacing: string;
  borderColor: string;
} = {
  width: '65%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'table',
  borderCollapse: 'separate',
  boxSizing: 'border-box',
  textIndent: 'initial',
  borderSpacing: '2px',
  borderColor: 'grey',
}

const tableRow: {
  height: string;
  marginBottom: string;
} = {
  height: '40px',
  marginBottom: '10px'
}

const tableHeaderTittle: {
  fontSize: string;
  fontWeight: string;
} = {
  fontSize: '16px',
  fontWeight: 'bold',
}

const confirmBtn: {
  display: string,
  border: string;
  cursor: string;
  borderRadius: string;
  boxSizing: 'border-box';
  transition: string;
  boxShadow: string;
  loat: string;
  color: string;
  padding: string;
  fontSize: string;
  width: string;
  background: string;
  margin: string;
} = {
  display: 'inline-block',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  boxSizing: 'border-box',
  transition: '.3s',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  loat: 'right',
  color: '#fff',
  padding: '15px 30px',
  fontSize: '18px',
  width: '65%',
  background: 'linear-gradient(to right, #E3E3E3, #90979f)',
  margin: '25px 0 60px 0'
}

const Confirmation: (props: any) => JSX.Element = props => {
  const {
    values,
    postCodeHValue,
    postCodeFValue,
    prefecturesValue,
    citiesValue,
    addrdetailValue,
    hideConfirmation} = props

  // mailjs（メール送信）に使用される変数
  const userID = process.env.MIX_USER_ID;
  const serviceID = process.env.MIX_SERVICE_ID;
  const templateID = process.env.MIX_TEMPLATE_ID;    
  const template_param = {
    name: values.name,
    postCode: postCodeHValue + '-' + postCodeFValue,
    address1: prefecturesValue + ' ' + citiesValue,
    address2: addrdetailValue,
    company: values.company,
    email: values.email,
    subject: values.subject,
    content: values.content,
  };

  // 入力値がDBに登録される
  const registdataAndSendmail = (e: any) => {
    e.preventDefault();
    if(mailjsIDCheck() !== false){
      axios.post('/store', inputAllFunction(e))
      .then(function (data) {
        send(serviceID!, templateID!, template_param).then(() => {
        });
        navigation('/doneSend');
        console.log(data);
      })
      .catch(function (error) {
        alert(
          '入力内容に誤りがあります。\n' +
          'もう一度ご確認ください。'
        )
        console.log(error);
      })
    }
  }

  const navigation = useNavigate();

  // 入力値の全てを、連想配列に格納する
  const inputAllFunction = (e: any) => {
    e.preventDefault();

    const inputNa = document.getElementById('name');
    const inputPh = document.getElementById('postCodeH')! as HTMLInputElement;
    const inputPf = document.getElementById('postCodeF')! as HTMLInputElement;
    const inputPr = document.getElementById('prefectures')! as HTMLInputElement;
    const inputCi = document.getElementById('cities')! as HTMLInputElement;
    const inputAd = document.getElementById('addrdetail')! as HTMLInputElement;
    const inputCm = document.getElementById('company');
    const inputEm = document.getElementById('email');
    const inputSu = document.getElementById('subject');
    const inputCt = document.getElementById('content');
    
    const name        = inputNa?.getAttribute('value');
    const postCodeH   = inputPh?.value;
    const postCodeF   = inputPf?.value;
    const prefectures = inputPr?.value;
    const cities      = inputCi?.value;
    const addrdetail  = inputAd?.value;
    const company     = inputCm?.getAttribute('value');
    const email       = inputEm?.getAttribute('value');
    const subject     = inputSu?.getAttribute('value');
    const content     = inputCt?.textContent;

    const inputAll: {
      name: string | null | undefined,
      postCodeH: string | null | undefined,
      postCodeF: string | null | undefined,
      prefectures: string | null | undefined,
      cities: string | null | undefined,
      addrdetail: string | null | undefined,
      company: string | null | undefined,
      email: string | null | undefined,
      subject: string | null | undefined,
      content: string | null | undefined,      
    } = {
      name: name,
      postCodeH: postCodeH,
      postCodeF: postCodeF,
      prefectures: prefectures,
      cities: cities,
      addrdetail: addrdetail,
      company: company,
      email: email,
      subject: subject,
      content: content,
    };

    return inputAll;
  }

  // emailjsのIDをチェックする
  const mailjsIDCheck = () => {
    if(
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ){
      init(userID);
    } else {
      return false;
    }
  }

  return (
    <section style={content}>
      <p>※ 以下の内容で送信します。</p>
      <table style={contentsBox}>
      <tr style={tableRow}><span style={tableHeaderTittle}>氏名：</span>{values.name}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>郵便番号：</span>{postCodeHValue}-{postCodeFValue}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>住所１：</span>{prefecturesValue} {citiesValue}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>住所２：</span>{addrdetailValue}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>会社名：</span>{values.company}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>メールアドレス：</span>{values.email}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>件名：</span>{values.subject}</tr>
      <tr style={tableRow}><span style={tableHeaderTittle}>お問い合わせ内容：</span>{values.content}</tr>
      </table>
      <input
        type='button'
        onClick={hideConfirmation}
        //クリックでstateをクリアし、入力内容確認画面コンポーネントを非表示にする
        value='閉じる'
      />
      <button onClick={registdataAndSendmail} style={confirmBtn}>送信</button>
    </section>
  )
}

export default Confirmation