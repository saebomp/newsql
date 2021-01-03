import React from 'react'

import Header from './Header'
import { Tabs } from 'antd';
import CBC from './CBC'
import BBC from './BBC'
import CNN from './CNN'


const Home = () => {
  const { TabPane } = Tabs;
  
  function callback(key) {
    // console.log(key);
  }

  return (
    <>
    <Header />
    <Tabs onChange={callback} type="card">
      <TabPane tab="CBC" key="1">
        <CBC />
      </TabPane>
      <TabPane tab="BBC" key="2">
        <BBC />
      </TabPane>
      <TabPane tab="CNN" key="3">
        <CNN />
      </TabPane>
    </Tabs>
    </>
  )
}
  

export default Home