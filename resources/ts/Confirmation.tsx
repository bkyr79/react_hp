import React from 'react'

const Confirmation: (props: any) => JSX.Element = props => {
  const {values, hideConfirmation} = props

// console.log(values.name)
  return (
    <>
    確認画面（テスト）
    <p>氏名：{values.name}</p>
    <p>郵便番号：{values.postCodeH}-{values.postCodeF}</p>
    <p>住所１：{values.prefectures}-{values.cities}</p>
    <p>住所２：{values.addrdetail}</p>
    <p>会社名：{values.company}</p>
    <p>メールアドレス：{values.email}</p>
    <p>件名：{values.subject}</p>
    <p>お問い合わせ内容：{values.content}</p>
    <input
      type='button'
      onClick={hideConfirmation}
      //クリックでstateをクリアし、入力内容確認画面コンポーネントを非表示にする
      value='閉じる'
    />    
    </>
  )
}

export default Confirmation