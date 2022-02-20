// import React, { VFC } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignupForm: VFC = () => {
//   const content: {
//     margin: string;
//   } = {
//     margin: '0 200px'
//   }

//   const description: {
//     marginBottom: string;
//   } = {
//     marginBottom: '30px'
//   }

//   const descriptionMsg: {
//     fontSize: string;
//   } = {
//     fontSize: '15px'
//   }

//   const contentsBox: {
//     width: string;
//     marginLeft: string;
//     marginRight: string;
//     display: string;
//     borderCollapse: 'separate';
//     boxSizing: 'border-box';
//     textIndent: string;
//     borderSpacing: string;
//     borderColor: string;
//   } = {
//     width: '65%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     display: 'table',
//     borderCollapse: 'separate',
//     boxSizing: 'border-box',
//     textIndent: 'initial',
//     borderSpacing: '2px',
//     borderColor: 'grey',
//   }

//   const tableHeaderTittle: {
//     fontSize: string;
//   } = {
//     fontSize: '16px'
//   }

//   const formInput: {
//     outline: string;
//     fontFamily: string;
//     display: string;
//     border: string;
//     borderRadius: string;
//     height: string;
//     fontSize: string;
//     color: string;
//     boxSizing: 'border-box';
//     width: string;
//     paddingLeft: string;
//   } = {
//     outline: 'none',
//     fontFamily: 'system-ui',
//     display: 'block',
//     border: '3px solid #f6f5f4',
//     borderRadius: '4px',
//     height: '34px',
//     fontSize: '15px',
//     color: '#777',
//     boxSizing: 'border-box',
//     width: '150%',
//     paddingLeft: '5px'
//   }

//   const tableRow: {
//     height: string;
//     marginBottom: string;
//   } = {
//     height: '40px',
//     marginBottom: '10px'
//   }

//   const tableHeader: {
//     textAlign: 'left';
//   } = {
//     textAlign: 'left'
//   }

//   return (
//     <Formik
//       initialValues={{ firstName: "", lastName: "", email: "" }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, "Must be 15 characters or less")
//           .required("Required"),
//         lastName: Yup.string()
//           .max(20, "Must be 20 characters or less")
//           .required("Required"),
//         email: Yup.string().email("Invalid email address").required("Required"),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       <Form>
//       <section style={content}>
//         <h2>お問い合わせ</h2>
//         <div style={description}><span style={descriptionMsg}>ご入力の上、「確認」ボタンを押してください。</span></div>

//         <table style={contentsBox}>
//           <tr style={tableRow}>
//             <tr>
//               <div style={tableHeader}>
//                 <label htmlFor="firstName"><span style={tableHeaderTittle}>ご氏名：</span></label>
//               </div>
//               <td>
//                 <Field name="firstName" type="text" style={formInput} />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td style={{display: 'inline-block', paddingRight: '100px'}}>
//                 <ErrorMessage name="firstName" />
//               </td>
//             </tr>
//           </tr>

//           <tr style={tableRow}>
//             <tr>
//               <div style={tableHeader}>
//                 <label htmlFor="lastName"><span style={tableHeaderTittle}>会社名：</span></label>
//               </div>
//               <td>
//                 <Field name="lastName" type="text" style={formInput} />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td style={{display: 'inline-block', paddingRight: '100px'}}>
//                 <ErrorMessage name="lastName" />
//               </td>
//             </tr>
//           </tr>

//           <tr style={tableRow}>
//             <tr>
//               <div style={tableHeader}>
//                 <label htmlFor="email"><span style={tableHeaderTittle}>メールアドレス：</span></label>
//               </div>
//               <td>
//                 <Field name="email" type="text" style={formInput} />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td style={{display: 'inline-block', paddingRight: '100px'}}>
//                 <ErrorMessage name="email" />
//               </td>
//             </tr>
//           </tr>        

//           {/* <tr style={tableRow}>
//             <label htmlFor="lastName">Last Name</label>
//             <td>
//               <Field name="lastName" type="text" style={formInput} />
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td style={{display: 'inline-block', paddingRight: '100px'}}>
//               <ErrorMessage name="lastName" />
//             </td>
//           </tr>

//           <tr style={tableRow}>
//             <label htmlFor="email">Email Address</label>
//             <td>
//               <Field name="email" type="text" style={formInput} />
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td style={{display: 'inline-block', paddingRight: '100px'}}>
//               <ErrorMessage name="email" />
//             </td>
//           </tr> */}

//         </table>
//         <button type="submit">Submit</button>
//       </section>
//       </Form>
//     </Formik>
//   );
// };

// export default SignupForm;

{/* <tr style={tableRow}>
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
</tr> */}