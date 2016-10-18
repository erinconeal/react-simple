import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent/AwesomeComponent.jsx';
import PartyList from './components/PartyList/PartyList.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React!</p>
                <AwesomeComponent />
                <PartyList />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));