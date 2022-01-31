import React from "react";

const contact = (): JSX.Element => {
  const mainContent: {
    margin: string;
  } = {margin: '0 200px'}

  const pageTitle = {}

  const contentsBox = {}

  const formInput: {
    outline: string;
  } = {outline: 'solid 1px black'}

  const btns: {
    color: string;
  } = {color: 'pink'}

  return (
    <div style={mainContent}>
      <h2 style={pageTitle}>お問い合わせ</h2>
      <div style={contentsBox}>
      <form>
        <div>
          <label htmlFor="nameForm">ご氏名：</label>
        </div>
        <div >
          <input type="text" id="nameForm" style={formInput}/>
        </div>
        <div>
          <label htmlFor="postalForm">郵便番号：</label>
        </div>
        <input type="text" id="postalForm" style={formInput} />
        <div>
          <label htmlFor="addressForm">住所：</label>
        </div>
        <input type="text" id="addressForm" style={formInput} />
        <div>
          <label htmlFor="companyNameForm">会社名：</label>
        </div>
        <input type="text" id="companyNameForm" style={formInput}
          required />
        <div>
          <label htmlFor="mailForm">メールアドレス：</label>
        </div>
        <input type="email" id="mailForm" style={formInput} />
        <div>
          <label htmlFor="mailTitleForm">件名：</label>
        </div>
        <input type="text" id="mailTitleForm" style={formInput} />
        <div>
          <label htmlFor="mailContentForm">お問い合わせ内容：</label>
        </div>
        <div style={btns}>
              <strong>キャンセル</strong>
        </div>
      </form>
      </div>
    </div>
  );
};

export default contact;