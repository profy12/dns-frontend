import React from 'react';

import ZoneList from './Zone/List';
import ZoneAdd from './Zone/Add';
import Nav from './Nav';

const App = () => (
<div id='main'>
        <header>
            <h1>Home</h1>
        </header>
        <Nav />
        <div id='content'>
            <ZoneAdd />
            <ZoneList />
        </div>
        <footer>
            By Profy
        </footer>
</div>

);

export default App;