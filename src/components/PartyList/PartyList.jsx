import React from 'react';
import {Link, hashHistory} from 'react-router';

import GuestComponent from '../GuestComponent/GuestComponent.jsx';
import AddGuest from '../AddGuest/AddGuest.jsx';

class PartyList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            theme: 'Batman',
            guests: [
                {
                  key: 1,
                  name: 'Batman'
                }, 
                {
                    key: 2,
                    name: 'Commissioner Gordon'
                }, 
                {
                    key: 3,
                    name: 'Pepperoni'
                },
                {
                    key: 4,
                    name: 'Ashleigh'
                }
            ]
        }

        this.handleAddGuest = this.handleAddGuest.bind(this);
    }

    handleAddGuest(guest) {
        let guestList = this.state.guests.slice();

        guestList.push({
            key: guestList.length+1,
            name: guest
        })

        this.setState({
            guests: guestList
        })
    }

    render() {
        const guestList = this.state.guests.map(function(guest) {
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


export default PartyList