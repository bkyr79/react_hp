import React from "react";

const contact = (): JSX.Element => {
  const mainContent: {
    margin: string;
  } = {
    margin: '0 200px'
  }

  const description: {
    marginBottom: string;
  } = {
    marginBottom: '30px'
  }

  const pageTitle = {}

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
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'table',
    borderCollapse: 'separate',
    boxSizing: 'border-box',
    textIndent: 'initial',
    borderSpacing: '2px',
    borderColor: 'grey',
  }

  const tableHeader: {
    textAlign: 'left';
  } = {
    textAlign: 'left'
  }

  const formInput: {
    outline: string;
    fontFamily: string;
    display: string;
    marginBottom: string;
    border: string;
    borderRadius: string;
    height: string;
    fontSize: string;
    color: string;
    boxSizing: 'border-box';
    width: string;
  } = {
    outline: 'none',
    fontFamily: 'system-ui',
    display: 'block',
    marginBottom: '10px',
    border: '3px solid #f6f5f4',
    borderRadius: '4px',
    height: '40px',
    fontSize: '18px',
    color: '#777',
    boxSizing: 'border-box',
    width: '100%'
  }

  const formTextarea: {
    outline: string;
    fontFamily: string;
    display: string;
    marginBottom: string;
    border: string;
    borderRadius: string;
    height: string;
    fontSize: string;
    color: string;
    boxSizing: 'border-box';
    width: string;
  } = {
    outline: 'none',
    fontFamily: 'system-ui',
    display: 'block',
    marginBottom: '10px',
    border: '3px solid #f6f5f4',
    borderRadius: '4px',
    height: '200px',
    fontSize: '18px',
    color: '#777',
    boxSizing: 'border-box',
    width: '100%'
  }

  const confirm: {
    border: string;
    cursor: string;
    borderRadius: string;
    boxSizing: 'border-box';
    transition: string;
    boxShadow: string;
    loat: string;
    color: string;
    background: string;
    padding: string;
    fontSize: string;
  } = {
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    boxSizing: 'border-box',
    transition: '.3s',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    loat: 'right',
    color: '#fff',
    background: '#90979f',
    padding: '15px 30px',
    fontSize: '18px'
  }

  return (
    // <div style={mainContent}>
    //   <h2 style={pageTitle}>お問い合わせ</h2>
    //   <div style={contentsBox}>
    //   <form>
    //     <div>
    //       <label htmlFor="nameForm">ご氏名：</label>
    //     </div>
    //     <div >
    //       <input type="text" id="nameForm" style={formInput}/>
    //     </div>
    //     <div>
    //       <label htmlFor="postalForm">郵便番号：</label>
    //     </div>
    //     <input type="text" id="postalForm" style={formInput} />
    //     <div>
    //       <label htmlFor="addressForm">住所：</label>
    //     </div>
    //     <input type="text" id="addressForm" style={formInput} />
    //     <div>
    //       <label htmlFor="companyNameForm">会社名：</label>
    //     </div>
    //     <input type="text" id="companyNameForm" style={formInput}
    //       required />
    //     <div>
    //       <label htmlFor="mailForm">メールアドレス：</label>
    //     </div>
    //     <input type="email" id="mailForm" style={formInput} />
    //     <div>
    //       <label htmlFor="mailTitleForm">件名：</label>
    //     </div>
    //     <input type="text" id="mailTitleForm" style={formInput} />
    //     <div>
    //       <label htmlFor="mailContentForm">お問い合わせ内容：</label>
    //     </div>
    //     <div style={btns}>
    //           <strong>キャンセル</strong>
    //     </div>
    //   </form>
    //   </div>
    // </div>

    <section>
      <h2><span>お問い合わせ</span></h2>
      <div style={description}><span>ご入力の上、「確認」ボタンを押してください。</span></div>
      <form>
        <table style={contentsBox}>
          <tr>
            <th style={tableHeader}><span>ご氏名：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>郵便番号：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>住所：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>会社名：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>メールアドレス：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>件名：</span></th>
            <td>
              <input type="text" style={formInput}/>
            </td>
          </tr>          
          <tr>
            <th style={tableHeader}><span>お問い合わせ内容：</span></th>
            <td>
              <textarea style={formTextarea}/>
            </td>
          </tr>          
        </table>

        <button style={confirm}>確認</button>
      </form>
    </section>
  );
};

export default contact;