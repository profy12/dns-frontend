import React from 'react';
import ZoneEdit from '../../components/Zone/Edit';
import Nav from '../../components/Nav';

const ScreensZoneForm = ({ match: { params } }) => (
  <div id='main'>
    <header>
        <h1>Edit zone</h1>
    </header>
    <Nav />
    <div id='content'>
        <ZoneEdit />
    </div>
    <footer>
        By Profy
    </footer>
</div>
);

export default ScreensZoneForm;