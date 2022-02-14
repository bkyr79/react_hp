import React, { useState, useCallback, VFC } from "react";


const ContactPostalCodeFunctionVer = () => {
  type StateType = {
    user: {
      e: {
        target: {
          name: string;
          value: string;
        }
      },
      address1?: string | null;
      address2?: string | null;
      address3?: string | null; 
    }    
  }

  type EventType = {
    e: {
      target: {
        name: string;
        value: string;
      }
    },
    address1?: string | null;
    address2?: string | null;
    address3?: string | null; 
  }

  const [state, setState] = useState<StateType>({
    user: {
      e: {
        target: {
          name: '',
          value: '',
        }
      },
      address1: null,
      address2: '',
      address3: ''    
    }
  });

  // 引数eの型any対策は、以下のinstanceofで型ガードする
  const handleChange = (e :any) => {
    const params: {
      e: {
        target: {
            name: string;
            value: string;
        }
      },
      address1?: string | null;
      address2?: string | null;
      address3?: string | null; 
    } = state.user;
    
    const key: keyof EventType = e.target.name;

    // instanceofで型ガード
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    params[key] = e.target.value;
    setState({ user: params });
  }

  const complementAddress = () => {
    const { AjaxZip3 } = window as any;
    AjaxZip3.zip2addr(
      'postCodeH',
      'postCodeF',
      'address1',
      'address2',
      'address3'  
    );
  };


  const element1 = document.getElementById('address1')! as HTMLInputElement;
  const element2 = document.getElementById('address2')! as HTMLInputElement;
  const element3 = document.getElementById('address3')! as HTMLInputElement;
  const onBlurZipcode = () => {
    setState({
      user: {
        ...state.user,
        address1: element1.value,
        address2: element2.value,
        address3: element3.value  
      }
    });
  };

  // const onClickAdd = () => {
  //   if (todoText === "") return;
  //   const newTodos = [...incompleteTodos, todoText];
  //   setIncompleteTodos(newTodos);
  //   setTodoText("");
  // };

  return(
    <>
      <input
        name="postCodeH"
        size={3}
        maxLength={3}
        onChange={e => handleChange(e)}
      />
      <input
        name="postCodeF"
        size={4}
        maxLength={4}
        onChange={e => handleChange(e)}
        onKeyUp={complementAddress}
        onBlur={onBlurZipcode}
      />
      <input
        name="address1"
        id="address1"
        onChange={e => handleChange(e)}
      />
      <input
        name="address2"
        id="address2"
        onChange={e => handleChange(e)}
      />
      <input
        name="address3"
        id="address3"
        onChange={e => handleChange(e)}
      />
    </>
  );  
};

export default ContactPostalCodeFunctionVer;