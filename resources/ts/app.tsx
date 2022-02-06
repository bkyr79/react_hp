import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import Contact from "./Contact";

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

  const tabBottom: {
    clear: 'both';
  } = {clear: 'both'}

  return (
    <Tabs>
      <div style={tabsTop}>
      <TabList style={tabList}>
        <Tab style={tabItem}><span style={tabItemTittle}>TOP</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>INFO</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>MENU</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>CALENDAR</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>問い合わせ</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>PROFILE</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>RESERVE</span></Tab>
        <Tab style={tabItem}><span style={tabItemTittle}>DIARY</span></Tab>
      </TabList>
      </div>

      <div style={tabBottom}></div>
      <TabPanel>
        <h2>トップページです</h2>
      </TabPanel>
      <TabPanel>
        <h2>インフォメーションです</h2>
      </TabPanel>
      <TabPanel>
        <h2>メニューです</h2>
      </TabPanel>
      <TabPanel>
        <h2>カレンダーです</h2>
      </TabPanel>
      <TabPanel>
        <Contact/>
      </TabPanel>
      <TabPanel>
        <h2>プロフィールです</h2>
      </TabPanel>
      <TabPanel>
        <h2>予約ページです</h2>
      </TabPanel>
      <TabPanel>
        <h2>日記です</h2>
      </TabPanel>
    </Tabs>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));