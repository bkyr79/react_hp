import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import Contact from "./contact";

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
        <Tab style={tabItem}>TOP</Tab>
        <Tab style={tabItem}>INFO</Tab>
        <Tab style={tabItem}>MENU</Tab>
        <Tab style={tabItem}>CALENDAR</Tab>
        <Tab style={tabItem}>問い合わせ</Tab>
        <Tab style={tabItem}>PROFILE</Tab>
        <Tab style={tabItem}>RESERVE</Tab>
        <Tab style={tabItem}>DIARY</Tab>
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