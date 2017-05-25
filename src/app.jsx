import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './shared/AwesomeComponent/AwesomeComponent.jsx';
import PartyList from './shared/PartyList.jsx'

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello React!</h1>
                <AwesomeComponent />
                <PartyList />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
