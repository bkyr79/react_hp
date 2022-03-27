import React from 'react'

const Confirmation: (props: any) => JSX.Element = props => {
  const {
    values,
    postCodeHValue,
    postCodeFValue,
    prefecturesValue,
    citiesValue,
    addrdetailValue,
    hideConfirmation} = props
// console.log(contactAddressValue)
  return (
    <>
    確認画面（テスト）
    <p>氏名：{values.name}</p>
    <p>郵便番号：{postCodeHValue}-{postCodeFValue}</p>
    <p>住所１：{prefecturesValue} {citiesValue}</p>
    <p>住所２：{addrdetailValue}</p>
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