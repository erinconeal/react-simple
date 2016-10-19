const ADD_GUEST = 'party/ADD_GUEST';
const CHANGE_THEME = 'party/CHANGE_THEME';

const initialState = {
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

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_GUEST:
            const guest = {
                key: state.guests.length+1,
                name: action.guest
            }
            return {
                guests: [...state.guests, guest],
                theme: state.theme
            }
        case CHANGE_THEME:
            return{
                guests: state.guests,
                theme: action.theme
            }
    }

    return state;
}

export function addGuest(guest) {
    return {
        type: ADD_GUEST,
        guest
    }
}

export function changeTheme(theme) {
    return {
        type: CHANGE_THEME,
        theme
    }
}