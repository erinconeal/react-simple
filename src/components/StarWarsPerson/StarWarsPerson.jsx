import React from 'react';

import {getPerson} from '../../services/StarWarsService';

class StarWarsPerson extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            person: {}
        }
    }
    componentDidMount() {
        getPerson(this.props.params.id).then(person => {
            this.setState({
                person: person
            })
        })
    }
    render() {
        console.log(this.props.params);
        
        return (
            <div>
                <p>Star Wars Person Component!</p>
                {this.state.person}
            </div>
        )
    }
}

export default StarWarsPerson