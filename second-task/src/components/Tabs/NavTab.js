import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './NavTab.css';
import  HomeCards from '../../Home/HomeCards';

function NavTab() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <p>Domains</p>
          </Tab>
          <Tab>
            <p>Web Hosting</p>
          </Tab>
          <Tab>
            <p>Dedicated Servers</p>
          </Tab>
          <Tab>
            <p>Virtual Cloud Services</p>
          </Tab>
          <Tab>
            <p>WordPress Hosting</p>
          </Tab>
          <Tab>
            <p>Email Hosting</p>
          </Tab>
          <Tab>
            <p>VPS Hosting Servers</p>
          </Tab>
          <Tab>
            <p>Free Hosting</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <HomeCards/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content5</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content6</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content7</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Content8</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default NavTab;
