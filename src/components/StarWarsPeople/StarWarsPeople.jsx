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
            <div className="container">
                <div className="row">
                    <h1 className="center">Star Wars People!</h1>
                    <div className="one-half column">
                        
                        {people}
                    </div>
                    <div className="one-half column">
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default StarWarsPeople