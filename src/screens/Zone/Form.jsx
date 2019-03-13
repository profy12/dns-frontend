import React from 'react';
import ZoneAdd from '../../components/Zone/Add';
import Nav from '../../components/Nav';

const ScreensZoneForm = ({ match: { params } }) => (
  <div id='main'>
    <header>
        <h1>Add new zone</h1>
    </header>
    <Nav />
    <div id='content'>
        <ZoneAdd />
    </div>
    <footer>
        By Profy
    </footer>
</div>
);

export default ScreensZoneForm;