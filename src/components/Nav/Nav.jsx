import React from 'react';
import {Link} from 'react-router';

import './Nav.less';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper row">
                    <div className="one-third column nav-title">
                        <Link to="/">
                            <p>Awesome App!</p>
                        </Link>
                    </div>
                    <div className="one-third column">
                        <Link to="/party">
                            <p>Party!</p>
                        </Link>
                    </div>
                    <div className="one-third column">
                        <Link to="/starwars">
                            <p>Star Wars!</p>
                        </Link>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Nav;