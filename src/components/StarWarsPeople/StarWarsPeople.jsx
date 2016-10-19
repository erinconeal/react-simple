import React from 'react';

import {getPeople} from '../../services/starWarsService.js';

// getPeople().then(people => console.log(people));

class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }


    componentDidMount() {
        getPeople().then(people => {
            this.setState({
                people: people
            })
        })
    }


    render() {
        const people = this.state.people.map(person => {
            return (
                <p>{person.name}</p>
            )
        })
        return (
            <div>
                <h1>Star Wars People!</h1>
                <p>{people}</p>
                <p>This is where our child app will go:</p>
                {this.props.children}
            </div>
        )
    }
}

export default StarWarsPeople