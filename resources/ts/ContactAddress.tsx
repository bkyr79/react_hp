import React, { useState, VFC } from "react";
import { Field, ErrorMessage } from "formik";


const tableRow: {
  height: string;
  marginBottom: string;
} = {
  height: '40px',
  marginBottom: '10px'
}

const tableHeader: {
  textAlign: 'left';
} = {
  textAlign: 'left'
}

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
  width: '15%',
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
  width: '20%',
  paddingLeft: '5px',
  float: 'left'
}

const postCodeHyphen: {
  float: 'left';
  height: string;
  paddingTop: string;
} = {
  float: 'left',
  height: '34px',
  paddingTop: '4px'
}

const formInputPrefectures: {
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
  marginRight: string;
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
  marginRight: '3px',
  float: 'left'
}

const formInputCities: {
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

const formInputAddrdetail: {
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

const ContactAddress: VFC = () => {
  type StateType = {
    user: {
      e: {
        target: {
          name: string;
          value: string;
        }
      },
      prefectures?: string | null | undefined;
      cities?: string | null | undefined;
      addrdetail?: string | null | undefined; 
    },
    errorTitle: {
      errorZipcode: string | undefined,
      errorAddress: string | undefined
    }
  }

  type EventType = {
    e: {
      target: {
        name: string;
        value: string;
      }
    },
    prefectures?: string | null | undefined;
    cities?: string | null | undefined;
    addrdetail?: string | null | undefined; 
  }

  // 郵便番号フォームの値を管理
  const [zipcodeValue, setZipcodeValue] = useState('');
  // 住所１フォームの値を管理
  const [addressValue, setAddressValue] = useState('');

  const [state, setState] = useState<StateType>({
    user: {
      e: {
        target: {
          name: '',
          value: '',
        }
      },
      prefectures: '',
      cities: '',
      addrdetail: ''    
    },
    errorTitle: {
      errorZipcode: zipcodeValue,
      errorAddress: addressValue
    }
  });

  // 引数eの型any対策は、以下のinstanceofで型ガードする
  const handleChangeZip = (e: any) => {
    const value = e.target.value;
    const params: {
      e: {
        target: {
          name: string;
          value: string;
        }
      },
      prefectures?: string | null | undefined;
      cities?: string | null | undefined;
      addrdetail?: string | null | undefined; 
    } = state.user;    
    const key: keyof EventType = e.target.name;

    if (value) {
      setZipcodeValue('');
    }

    // instanceofで型ガード
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    params[key] = e.target.value;

    setState({
      user: params,
      errorTitle: {
        errorZipcode: zipcodeValue,
        errorAddress: addressValue
      } 
    });    
  }

  const handleChangeAddr = (e: any) => {
    const value = e.target.value;
    if (value) {
      setAddressValue('');
    }

    const params: {
      e: {
        target: {
          name: string;
          value: string;
        }
      },
      prefectures?: string | null | undefined;
      cities?: string | null | undefined;
      addrdetail?: string | null | undefined; 
    } = state.user;
    
    const key: keyof EventType = e.target.name;

    // instanceofで型ガード
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    params[key] = e.target.value;
    setState({
      user: params,
      errorTitle: {
        errorZipcode: zipcodeValue,
        errorAddress: addressValue
      } 
    });    
  }

  const checkZipHead = (str: any) => {
    const regex = /^[0-9]{3}$/;
    if(regex.test(str)){
      setZipcodeValue('チェックする文字列と正規表現が一致');
    }  }

  const checkBlank = (str: any) => {
    if (!str) {
      setZipcodeValue('入力してください');
    }
  }

  const checkZipcode = (e: any) => {
    const value = e.target.value;
    if (value) {
      setZipcodeValue('');
    }

    checkBlank(value);

    checkZipHead(value);

    setState({
      user: value,
      errorTitle: {
        errorZipcode: zipcodeValue,
        errorAddress: addressValue
      }
    })
  }

  const checkAddress = (e: any) => {
    const value = e.target.value;
    if (!value) {
      setAddressValue('入力してください');
    }
    if (value) {
      setAddressValue('');
    } 
    setState({
      user: value,
      errorTitle: {
        errorZipcode: zipcodeValue,
        errorAddress: addressValue
      }
    })

    // else if (value.length > 100) {
    //   setState({
    //     user: value,
    //     errorTitle: {
    //       errorZipcode: '記事タイトルは100文字以内で入力してください',
    //       errorAddress: ''
    //     }
    //   })
    // } else {
    //   setState({
    //     user: value,
    //     errorTitle: {
    //       errorZipcode: '',
    //       errorAddress: ''
    //     }
    //   })
    // }
  }

  const complementAddress = (e: any) => {
    const { AjaxZip3 } = window as any;
    AjaxZip3.zip2addr(
      'postCodeH',
      'postCodeF',
      'prefectures',
      'cities',
      'addrdetail'  
    );

    const value = e.target.value;
    if (value) {
      setAddressValue('');
    } 
  };

  const element1 = document.getElementById('prefectures')! as HTMLInputElement;
  const element2 = document.getElementById('cities')! as HTMLInputElement;
  const element3 = document.getElementById('addrdetail')! as HTMLInputElement;
  const onBlurZipcode = () => {
    setState({
      user: {
        ...state.user,
        prefectures: element1.value,
        cities: element2.value,
        addrdetail: element3.value  
      },
      errorTitle: {
        errorZipcode: zipcodeValue,
        errorAddress: addressValue
      }
    });
  };
  
  const checkZipcodeOnBlur = (e: any) => {
    checkZipcode(e);
    onBlurZipcode;
  }

  return(
    <>
    <tr style={tableRow}>
      <th style={tableHeader}>
        <label><span>郵便番号：</span></label>
      </th>
      <td>
        <div style={postCodeContainer}>
          <input
            name="postCodeH"
            size={3}
            maxLength={3}
            onChange={(e) => handleChangeZip(e)}
            onBlur={(e) => checkZipcodeOnBlur(e)}
            style={postCodeH}
          />
          <div style={postCodeHyphen}>
          -
          </div>
          <input
            name="postCodeF"
            size={4}
            maxLength={4}
            onChange={(e) => handleChangeZip(e)}
            onKeyUp={complementAddress}
            onBlur={(e) => checkZipcodeOnBlur(e)}
            style={postCodeF}
          />
        </div>
      </td>
    </tr>
    <tr>
      <th style={tableHeader}></th>      
      <div>{state.errorTitle.errorZipcode}</div>
      {/* <ErrorMessage name="postCodeH" /> */}
    </tr>

    <tr style={tableRow}>
      <th style={tableHeader}>
        <label><span>住所１：</span></label>
      </th>
      <td>
        <div style={postCodeContainer}>
          <input
            name="prefectures"
            id="prefectures"
            onChange={(e) => handleChangeAddr(e)}
            onBlur={(e) => checkAddress(e)}
            style={formInputPrefectures}
          />
          <input
            name="cities"
            id="cities"
            onChange={(e) => handleChangeAddr(e)}
            onBlur={(e) => checkAddress(e)}
            style={formInputCities}
          />
        </div>
      </td>
    </tr>  
    <tr>
      <th style={tableHeader}></th>
      <div>{state.errorTitle.errorAddress}</div>
      {/* <ErrorMessage name="prefectures" /> */}
    </tr>

    <tr style={tableRow}>
      <th style={tableHeader}>
        <label><span>住所２：</span></label>
      </th>
      <td>
        <input
          name="addrdetail"
          id="addrdetail"
          onChange={(e) => handleChangeZip(e)}
          style={formInputAddrdetail}
        />
      </td>
    </tr>
    <tr>
      <th style={tableHeader}></th>
      {/* <ErrorMessage name="addrdetail" /> */}
    </tr>
    </>
  );  
};

export default ContactAddress;