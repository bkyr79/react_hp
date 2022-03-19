import React from 'react'

const Confirmation: (props: any) => JSX.Element = props => {
  const {values, hideConfirmation} = props

  return (
    <>
    確認画面（テスト）
    <p>氏名：{values.name}</p>
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