import React from "react";
import ContactAddress from "./ContactAddress";
// import SignupForm from "./SignupForm";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";



const Contact = (): JSX.Element => {
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

  const tableRowTextArea: {
    height: '40px',

    marginTop: string;
  } = {
    height: '40px',

    marginTop: '100px'
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
    margin: string;
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
    margin: '7px 0',
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

  return (
    <section style={content}>
      <h2>お問い合わせ</h2>
      <div style={description}><span style={descriptionMsg}>ご入力の上、「確認」ボタンを押してください。</span></div>

    <Formik
      initialValues={{ name: "", company: "", email: "", subject: "", content: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
          company: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        subject: Yup.string().email("Invalid email address").required("Required"),
        content: Yup.string().email("Invalid email address").required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >

      <Form>
      <table style={contentsBox}>

        <tr style={tableRow}>
          <th style={tableHeader}>
            <label htmlFor="name"><span style={tableHeaderTittle}>ご氏名：</span></label>
          </th>
          <td>
            <Field name="name" type="text" style={formInput} />
          </td>
        </tr>
        <tr>
          <th style={tableHeader}></th>
          <ErrorMessage name="name" />
        </tr>

            <ContactAddress />

        <tr style={tableRow}>
          <th style={tableHeader}>
            <label htmlFor="company"><span style={tableHeaderTittle}>会社名：</span></label>
          </th>
          <td>
            <Field name="company" type="text" style={formInput} />
          </td>
        </tr>
        <tr>
          <th style={tableHeader}></th>
          <ErrorMessage name="company" />
        </tr>

        <tr style={tableRow}>
          <th style={tableHeader}>
            <label htmlFor="email"><span style={tableHeaderTittle}>メールアドレス：</span></label>
          </th>
          <td>
            <Field name="email" type="text" style={formInput} />
          </td>
        </tr>
        <tr>
          <th style={tableHeader}></th>
          <ErrorMessage name="email" />
        </tr>

        <tr style={tableRow}>
          <th style={tableHeader}>
            <label htmlFor="subject"><span style={tableHeaderTittle}>件名：</span></label>
          </th>
          <td>
            <Field name="subject" type="text" style={formInput} />
          </td>
        </tr>
        <tr>
          <th style={tableHeader}></th>
          <ErrorMessage name="subject" />
        </tr>

        <tr style={tableRowTextArea}>
          <th style={tableHeader}><span>お問い合わせ内容：</span></th>
          <td>
            <textarea style={formTextarea}/>
          </td>
        </tr>          
      </table>
      </Form>

    </Formik>

{/* <SignupForm /> */}

      <input type="submit" value="確認" style={confirmBtn}/>
    </section>
  );
};

export default Contact;