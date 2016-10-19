import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import AwesomeComponent from './components/AwesomeComponent/AwesomeComponent.jsx';
import PartyList from './components/PartyList/PartyList.jsx';
import StarWarsPeople from './components/StarWarsPeople/StarWarsPeople.jsx';
import StarWarsPerson from './components/StarWarsPerson/StarWarsPerson.jsx';
import Nav from './components/Nav/Nav.jsx';

import './normalize.css';
import './skeleton.css';
class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Nav}>
                    <Route path="/" component={AwesomeComponent} />
                    <Route path="/party" component={PartyList} />
                    <Route path="/starwars" component={StarWarsPeople}>
                        <Route path="/person/:id" component={StarWarsPerson} />
                    </Route>
                </Route>
            </Router>
        )
    }
}

render(<App/>, document.getElementById('app'));