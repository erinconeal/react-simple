import {combineReducers} from 'redux';

import party from './redux/party';
import starwars from './redux/starwars';

export default combineReducers({
    party,
    starwars
})