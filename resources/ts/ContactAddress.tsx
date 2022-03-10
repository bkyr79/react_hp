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

const errorTitle: {
  color: string;
} = {
  color: 'red'
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
      errorZipcode: {
        errorZipcodeH: string,
        errorZipcodeF: () => string | undefined
      },
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

  // （郵便番号の）第１フォーム入力内容の誤り有無に関する条件分岐
  // 目的: 以下のように条件分岐することで、第１フォームのエラー表示が第２フォームのエラー表示に上書きされないようになる
  const errorZipF = (): string | undefined => {
    let val: string | undefined = '';
    if(zipcodeValue != '') {
      val = undefined;
    }
    if(zipcodeValue === '') {
      val = zipcodeValue;
    }
    return val;
  }

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
      errorZipcode: {
        errorZipcodeH: zipcodeValue,
        errorZipcodeF: errorZipF,
      },      
      errorAddress: addressValue
    }
  });

  // 引数eの型any対策は、以下のinstanceofで型ガードする
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value) {
      if(name === 'postCodeH' || name === 'postCodeF'){
        setZipcodeValue('');
      }
      if(name === 'prefectures' || name === 'cities'){
        setAddressValue('');
      }
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
        errorZipcode: {
          errorZipcodeH: zipcodeValue,
          errorZipcodeF: errorZipF,
        },
        errorAddress: addressValue
      } 
    });    
  }
  
  // 郵便番号（頭の）桁数
  const ZipHeaderDigits = (str: any) => {
    const regex = /^[0-9]{3}$/;
    if(!regex.test(str)){
      setZipcodeValue('郵便番号の形式が正しくありません');
    }
  }

  // 郵便番号（後ろの）桁数
  const ZipFooterDigits = (str: any) => {
    const regex = /^[0-9]{4}$/;
    if(!regex.test(str)){
      setZipcodeValue('郵便番号の形式が正しくありません');
    }
  }

  const spacePattern = (str: any) => {
    const halfSpace = /(  )+/; //半角スペースの連記
    const fullSpace = /(　　)+/; //全角スペースの連記
    const half_fullSpace = /( +)+(　+)/; //半角スペース、全角スペースの順の記載
    const full_halfSpace = /(　+)+( +)/; //全角スペース、半角スペースの順の記載
    if(halfSpace.test(str)){
      return false;
    }
    if(fullSpace.test(str)){
      return false;
    }
    if(half_fullSpace.test(str)){
      return false;
    }
    if(full_halfSpace.test(str)){
      return false;
    }
    if(str === ' ' || str === '　'){
      return false;
    }
    return true;
  }

  const checkSpace = (name: any, value: any) => {
    if(!spacePattern(value)){
      if(name === 'postCodeH' || name === 'postCodeF'){
        setZipcodeValue('スペースは使用できません');
      }
      if(name === 'prefectures' || name === 'cities'){
        setAddressValue('スペースは使用できません');
      }
    }
  }

  const checkBlank = (name: any, value: any) => {
    if (!value) {
      if(name === 'postCodeH' || name === 'postCodeF'){
        setZipcodeValue('入力してください');
      }
      if(name === 'prefectures' || name === 'cities'){
        setAddressValue('入力してください');
      }
    }
  }

  const checkForm = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value) {
      if(name === 'postCodeH' || name === 'postCodeF'){
        setZipcodeValue('');
      }
      if(name === 'prefectures' || name === 'cities'){
        setAddressValue('');
      }
    }

    if(name === 'postCodeH'){
      ZipHeaderDigits(value);
    }
    if(name === 'postCodeF'){
      ZipFooterDigits(value);
    }

    checkSpace(name, value);
    checkBlank(name, value);

    setState({
      user: value,
      errorTitle: {
        errorZipcode: {
          errorZipcodeH: zipcodeValue,
          errorZipcodeF: errorZipF,
        },
        errorAddress: addressValue
      }
    })
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
        errorZipcode: {
          errorZipcodeH: zipcodeValue,
          errorZipcodeF: errorZipF,
        },
        errorAddress: addressValue
      }
    });
  };
  
  const checkZipcodeOnBlur = (e: any) => {
    checkForm(e);
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            onKeyUp={complementAddress}
            onBlur={(e) => checkZipcodeOnBlur(e)}
            style={postCodeF}
          />
        </div>
      </td>
    </tr>
    <tr>
      <th style={tableHeader}></th>      
      <div style={errorTitle}>{state.errorTitle.errorZipcode.errorZipcodeH}</div>
      <div style={errorTitle}>{state.errorTitle.errorZipcode.errorZipcodeF}</div>
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
            onChange={(e) => handleChange(e)}
            onBlur={(e) => checkForm(e)}
            style={formInputPrefectures}
          />
          <input
            name="cities"
            id="cities"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => checkForm(e)}
            style={formInputCities}
          />
        </div>
      </td>
    </tr>  
    <tr>
      <th style={tableHeader}></th>
      <div style={errorTitle}>{state.errorTitle.errorAddress}</div>
    </tr>

    <tr style={tableRow}>
      <th style={tableHeader}>
        <label><span>住所２：</span></label>
      </th>
      <td>
        <input
          name="addrdetail"
          id="addrdetail"
          onChange={(e) => handleChange(e)}
          style={formInputAddrdetail}
        />
      </td>
    </tr>
    <tr>
      <th style={tableHeader}></th>
    </tr>
    </>
  );  
};

export default ContactAddress;