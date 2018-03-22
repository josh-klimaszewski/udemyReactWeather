import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER: 
    // concat rahter than push to not mutate state
        // return state.concat([action.payload.data]);
    // flattens array with es6 (could use line 7 instead)
        return [ action.payload.data, ...state ]; 
    }
    return state;
}