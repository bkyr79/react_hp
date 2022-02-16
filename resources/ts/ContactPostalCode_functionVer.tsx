import React, { useState, useCallback, VFC } from "react";


const postCodeContainer: {
  overflow: string;
} = {
  overflow: 'hidden',
}

const postCodeH: {
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
  float: 'left';
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
  width: '30%',
  paddingLeft: '5px',
  float: 'left'
}

const postCodeF: {
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
  float: 'left';
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
  width: '40%',
  paddingLeft: '5px',
  float: 'left'
}

const postCodeHyphen: {
  float: 'left';
  height: string;
  verticalAlign: string;
} = {
  float: 'left',
  height: '34px',
  verticalAlign: 'middle'
}

const address1: {
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

const address2: {
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

const address3: {
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

const ContactPostalCodeFunctionVer: VFC = () => {
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
    <div style={postCodeContainer}>
      <td>
      <input
        name="postCodeH"
        size={3}
        maxLength={3}
        onChange={e => handleChange(e)}
        style={postCodeH}
      />
      </td>
      <div style={postCodeHyphen}>
      -
      </div>
      <td>
      <input
        name="postCodeF"
        size={4}
        maxLength={4}
        onChange={e => handleChange(e)}
        onKeyUp={complementAddress}
        onBlur={onBlurZipcode}
        style={postCodeF}
      />
      </td>
    </div>
    <td>
      <input
        name="address1"
        id="address1"
        onChange={e => handleChange(e)}
        style={formInput}
      />
      </td>
      <td>
      <input
        name="address2"
        id="address2"
        onChange={e => handleChange(e)}
        style={formInput}
      />
      </td>
      <td>
      <input
        name="address3"
        id="address3"
        onChange={e => handleChange(e)}
        style={formInput}
      />
      </td>
    </>
  );  
};

export default ContactPostalCodeFunctionVer;