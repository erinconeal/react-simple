import React from 'react';
import {Link, hashHistory} from 'react-router';
import {addGuest} from '../../redux/party';
import {connect} from 'react-redux';

import GuestComponent from '../GuestComponent/GuestComponent.jsx';
import AddGuest from '../AddGuest/AddGuest.jsx';

class PartyList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.handleAddGuest = this.handleAddGuest.bind(this);
    }

    handleAddGuest(guest) {
        this.props.addGuest(guest);
    }

    render() {
        const guestList = this.props.guests.map(function(guest) {
            return <GuestComponent 
              key={guest.key}
              guest={guest.name}/>
        })


        return (
            <div>
                <h3>This is gonna be a great {this.props.theme} party!</h3>
                <h5>Guest List:</h5>
                {guestList}
                <AddGuest 
                  addGuest={this.handleAddGuest} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        guests: state.party.guests,
        theme: state.party.theme
    }
}

export default connect(mapStateToProps, {addGuest})(PartyList);