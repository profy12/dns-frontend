import React from 'react';
import ZoneList from '../../components/Zone/List';
import Nav from '../../components/Nav';

const ScreensZoneList = () => (
  <div id='main'>
        <header>
            <h1>Liste des zones</h1>
        </header>
        <Nav />
        <div id='content'>
            <ZoneList />
        </div>
        <footer>
            By Profy
        </footer>
  </div>
);

export default ScreensZoneList;