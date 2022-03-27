import React, {useState, FC, Dispatch, SetStateAction, useContext} from "react";
import ContactAddress from "./ContactAddress";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import Confirmation from './Confirmation'


type FormValueType = {
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
};

export const UserCount = React.createContext({
  postCodeH: '',
  postCodeF: '',
  prefectures: '',
  cities: '',
  addrdetail: '',
})

const Contact: FC = (): JSX.Element => {
  const content: {
    margin: string;
  } = {
    margin: '0 200px'
  }

  const description: {
    marginBottom: string;
  } = {
    marginBottom: '30px'
  }

  const descriptionMsg: {
    fontSize: string;
  } = {
    fontSize: '15px'
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

  const tableHeader: {
    textAlign: 'left';
  } = {
    textAlign: 'left'
  }

  const tableHeaderTittle: {
    fontSize: string;
  } = {
    fontSize: '16px'
  }

  const formInput: {
    outline: string;
    fontFamily: string;
    display: string;
    border: string;
    borderRadius: string;
    height: string;
    fontSize: string;
    color: string;
    boxSizing: 'border-box';
    width: string;
    paddingLeft: string;
  } = {
    outline: 'none',
    fontFamily: 'system-ui',
    display: 'block',
    border: '3px solid #f6f5f4',
    borderRadius: '4px',
    height: '34px',
    fontSize: '15px',
    color: '#777',
    boxSizing: 'border-box',
    width: '85%',
    paddingLeft: '5px'
  }

  const formTextarea: {
    outline: string;
    fontFamily: string;
    display: string;
    border: string;
    borderRadius: string;
    height: string;
    fontSize: string;
    color: string;
    boxSizing: 'border-box';
    width: string;
    paddingLeft: string;
  } = {
    outline: 'none',
    fontFamily: 'system-ui',
    display: 'block',
    border: '3px solid #f6f5f4',
    borderRadius: '4px',
    height: '200px',
    fontSize: '15px',
    color: '#777',
    boxSizing: 'border-box',
    width: '85%',
    paddingLeft: '5px'
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

  const errorTitle: {
    color: string;
    textAlign: 'left';
    paddingLeft: string;
  } = {
    color: 'red',
    textAlign: 'left',
    paddingLeft: '5px'
  }

  // const resourceName = React.useContext(UserCount);

  // 入力内容確認画面の表示・非表示
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)
  // 閉じるボタンを押した時非表示にする
  const hideConfirmation = () => setIsConfirmationVisible(false)
  // submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmitData = () => setIsConfirmationVisible(true)

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

  const navigation = useNavigate();
  // 画面遷移する
  const switchScreen = () => {
    navigation('/sample');
  }

  // 入力値がDBに登録される
  const ajax = (e: any) => {
    e.preventDefault();

    axios.post('/store', inputAllFunction(e))
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const initialValues: {
    name: string;
    postCodeH: string;
    postCodeF: string;
    prefectures: string;
    cities: string;
    addrdetail: string;
    company: string;
    email: string;
    subject: string;
    content: string;
} = {
    name: '',
    postCodeH: '',
    postCodeF: '',
    prefectures: '',
    cities: '',
    addrdetail: '',    
    company: '',
    email: '',
    subject: '',
    content: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "15文字以内で入力してください")
      .required("入力してください")
      .matches(/^[^\x20-\x7e]*$/, { message: '文字列が有効ではありません' }),
    company: Yup.string()
      .max(20, "20文字以内で入力してください")
      .required("入力してください")
      .matches(/^[^\x20-\x7e]*$/, { message: '文字列が有効ではありません' }),
    email: Yup.string()
      .email("Emailの形式で入力してください。")
      .required("入力してください"),
    subject: Yup.string()
      .max(20, "20文字以内で入力してください")
      .required("入力してください")
      .matches(/^[^\x20-\x7e]*$/, { message: '文字列が有効ではありません' }),
    content: Yup.string()
      .required("入力してください")
      .matches(/^[^\x20-\x7e]*$/, { message: '文字列が有効ではありません' }),
  })

  const {handleSubmit} = useForm()
  // submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmit = () => {handleSubmit(onSubmitData)}
  
  const formik = 
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    })

  // ContactAddressコンポーネントに渡すためのuseState
  // 子コンポーネントから親コンポーネントのstateを変更することで、子から親へ値を渡せる
  const [postCodeHProp, setPostCodeHProp]     = useState("");
  const [postCodeFProp, setPostCodeFProp]     = useState("");
  const [prefecturesProp, setPrefecturesProp] = useState("");
  const [citiesProp, setCitiesProp]           = useState("");
  const [addrdetailProp, setAddrdetailProp]   = useState("");

  return (
    <section style={content}>
      <h2>お問い合わせ</h2>
      <div style={description}><span style={descriptionMsg}>ご入力の上、「確認」ボタンを押してください。</span></div>
      
      <form onSubmit={handleSubmit(onSubmitData)}>
        <table style={contentsBox}>
          <tr style={tableRow}>
            <th style={tableHeader}>
              <label><span style={tableHeaderTittle}>ご氏名：</span></label>
            </th>
            <td>
              <input name="name" type="text" id="name" value={formik.values.name} onChange={formik.handleChange} style={formInput} />
            </td>
          </tr>
          <tr>
            <th style={tableHeader}></th>
            {/* <div style={errorTitle}><ErrorMessage name="name" /></div> */}
            <div style={errorTitle}>{formik.errors.name}</div>
          </tr>

          <ContactAddress
            /* @ts-ignore */
            setPostCodeHProp = {setPostCodeHProp}
            setPostCodeFProp = {setPostCodeFProp}
            setPrefecturesProp = {setPrefecturesProp}
            setCitiesProp = {setCitiesProp}
            setAddrdetailProp = {setAddrdetailProp}
          />
          {/* 仮で値を表示させておく(フォームの値を取得できているかの確認のため) */}
          {postCodeHProp}
          {postCodeFProp}
          {prefecturesProp}
          {citiesProp}
          {addrdetailProp}

          <tr style={tableRow}>
            <th style={tableHeader}>
              <label><span style={tableHeaderTittle}>会社名：</span></label>
            </th>
            <td>
              <input name="company" type="text" id="company" value={formik.values.company} onChange={formik.handleChange} style={formInput} />
            </td>
          </tr>
          <tr>
            <th style={tableHeader}></th>
            <div style={errorTitle}>{formik.errors.company}</div>
          </tr>

          <tr style={tableRow}>
            <th style={tableHeader}>
              <label><span style={tableHeaderTittle}>メールアドレス：</span></label>
            </th>
            <td>
              <input name="email" type="email" id="email" value={formik.values.email} onChange={formik.handleChange} style={formInput} />
            </td>
          </tr>
          <tr>
            <th style={tableHeader}></th>
            <div style={errorTitle}>{formik.errors.email}</div>
          </tr>

          <tr style={tableRow}>
            <th style={tableHeader}>
              <label><span style={tableHeaderTittle}>件名：</span></label>
            </th>
            <td>
              <input name="subject" type="text" id="subject" value={formik.values.subject} onChange={formik.handleChange} style={formInput} />
            </td>
          </tr>
          <tr>
            <th style={tableHeader}></th>
            <div style={errorTitle}>{formik.errors.subject}</div>
          </tr>

          <tr style={tableRow}>
            <th style={tableHeader}>
              <label><span style={tableHeaderTittle}>お問い合わせ内容：</span></label>
            </th>
            <td>
              <textarea name="content" id="content" value={formik.values.content} onChange={formik.handleChange} style={formTextarea} />
            </td>
          </tr>
          <tr>
            <th style={tableHeader}></th>
            <div style={errorTitle}>{formik.errors.content}</div>
          </tr>
        </table>

        <input type='submit' value='確認' style={confirmBtn} />
      </form>

      {/* <button onClick={(e) => ajax(e)} style={confirmBtn}>確認</button> */}
      {/* <button onClick={switchScreen} style={confirmBtn}>確認</button> */}

      {isConfirmationVisible && //trueの時だけ入力内容確認画面を表示
        <Confirmation //入力内容確認画面コンポーネント
          values={formik.values}
          postCodeHValue={postCodeHProp}
          postCodeFValue={postCodeFProp}
          prefecturesValue={prefecturesProp}
          citiesValue={citiesProp}
          addrdetailValue={addrdetailProp}
          hideConfirmation={hideConfirmation} //入力内容確認画面表示・非表示のstateをConfirmationに渡す
        />
      }

    </section>
  );
};

export default Contact;