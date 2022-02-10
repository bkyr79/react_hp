import React, { useState, useCallback, VFC } from "react";

type Props = {
  oya: string;
};

const ContactPostalCode: VFC<Props> = (props) => {
  const [moji, setMoji] = useState(props.oya);

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
    width: '130%',
    paddingLeft: '5px'
  }
  
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["行動１", "行動２"]); 

  const onChangeTodoText = (event: any) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  // const addMoji = useCallback(() => {
  //   setMoji( moji => moji + 'お尻に文字を足します！' );    
  // },[]);

  return (
  <>
    {/* <h2>props.oyaの中身: { todo }</h2> */}
    <button onClick={onClickAdd}>追加</button>
    <input
      type="text"
      style={formInput}
      placeholder="TODOを入力"
      value={todoText}
      onChange={onChangeTodoText}
    />
    {incompleteTodos.map((todo) => {
      return (
        <div key={todo}>
          {todo}
        </div>
      )
    })}
  </>
  )
}

export default ContactPostalCode;