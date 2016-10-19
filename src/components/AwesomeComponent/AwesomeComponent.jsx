import React from 'react';
import {connect} from 'react-redux';

import GuestComponent from '../GuestComponent/GuestComponent.jsx';

require('./AwesomeComponent.css');

const h1Style = {
    color: 'Blue'
}
class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {
        const guests = this.props.guests.map(guest => (
            <GuestComponent
                key={guest.key}
                guest={guest.name}
            />
        ))
        return (
        <div>
            <h1 style={h1Style}>DM-13 IS AWESOME!</h1>
            <div className="row">
                <div className="one-half column">
                <h5>Guest List</h5>
                {guests}
                </div>
                <div className="one-half column">
                <h5> Star Wars People</h5>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        guests: state.party.guests
    }
}

export default connect(mapStateToProps)(AwesomeComponent)