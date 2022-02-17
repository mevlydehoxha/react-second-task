import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './NavTab.css';
import  Domain from '../../CardsContent/Domain';
import WebHosting from '../../CardsContent/WebHosting';
import DedicatedServers from '../../CardsContent/DedicatedServers';
import VirtualCloudServices from '../../CardsContent/VirtualCloudServices';
import WordPressHosting from '../../CardsContent/WordPressHosting';
import EmailHosting from '../../CardsContent/EmailHosting';
import VPSHostingServers from '../../CardsContent/VPSHostingServers';
import FreeHosting from '../../CardsContent/FreeHosting';

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
            <Domain/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <WebHosting/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
           <DedicatedServers/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <VirtualCloudServices/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <WordPressHosting/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <EmailHosting/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <VPSHostingServers/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <FreeHosting/>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default NavTab;
