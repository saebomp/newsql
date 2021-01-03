import React from 'react'

import Header from './Header'
import { Tabs } from 'antd';
import BBC from './BBC'


const Home = () => {
  const { TabPane } = Tabs;
  
  function callback(key) {
    console.log(key);
  }

  return (
    <>
    <Header />
    <Tabs onChange={callback} type="card">
      <TabPane tab="BBC" key="1">
        <BBC />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    </>
  )
}
  

export default Home