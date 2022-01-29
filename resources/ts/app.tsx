import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  return (

    <Tabs>
      <TabList>
        <Tab>TOP</Tab>
        <Tab>INFO</Tab>
        <Tab>MENU</Tab>
        <Tab>CALENDAR</Tab>
        <Tab>問い合わせ</Tab>
        <Tab>PROFILE</Tab>
        <Tab>RESERVE</Tab>
        <Tab>DIARY</Tab>
      </TabList>

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
        <h2>問い合わせページです</h2>
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