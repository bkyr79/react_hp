import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Contact from "./ContactMain";
import DoneSend from "./component/DoneSend";
import ReserveMain from "./ReserveMain"

const App = (): JSX.Element => {
  const tabsTop: {
    margin: string;
  } = {margin: '0 200px'}

  const tabList: {
    listStyleType: string;
    display: string;
    margin: string;
    cursor: string;
  } = {listStyleType: 'none', display: 'inline-block', margin: '40px 20px', cursor: 'pointer'}

  const tabItemTittle: {
    fontSize: string;
  } = {
    fontSize: '16px'
  }
  
  const tabItem: {
    display: string;
    float: 'left';
    margin: string;
  } = {display: 'block', float: 'left', margin: '0 20px'}

  return (
    <BrowserRouter>
      <div style={tabsTop}>
        <div style={tabList}>
          <Link style={tabItem} to="/">
            <span style={tabItemTittle}>TOP</span>
          </Link>
          <Link style={tabItem} to="/info">
            <span style={tabItemTittle}>INFO</span>
          </Link>
          <Link style={tabItem} to="/menu">
            <span style={tabItemTittle}>MENU</span>
          </Link>
          <Link style={tabItem} to="/calendar">
            <span style={tabItemTittle}>CALENDAR</span>
          </Link>
          <Link style={tabItem} to="/contact">
            <span style={tabItemTittle}>問い合わせ</span>
          </Link>
          <Link style={tabItem} to="/profile">
            <span style={tabItemTittle}>PROFILE</span>
          </Link>
          <Link style={tabItem} to="/reserve">
            <span style={tabItemTittle}>RESERVE</span>
          </Link>
          <Link style={tabItem} to="/diary">
            <span style={tabItemTittle}>DIARY</span>
          </Link>
        </div>
      </div>
      
      <Routes>
          <Route path="/" element={<h2>トップページです</h2>} />
          <Route path="/info" element={<h2>インフォメーションです</h2>} />
          <Route path="/menu" element={<h2>メニューです</h2>} />
          <Route path="/calendar" element={<h2>カレンダーです</h2>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<h2>プロフィールです</h2>} />
          <Route path="/reserve" element={<ReserveMain />}/>
          <Route path="/diary" element={<h2>日記です</h2>} />
          <Route path="/sample" element={<div>サンプル画面です</div>}/>
          <Route path="/doneSend" element={<DoneSend />}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));