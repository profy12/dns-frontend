import {ZONE_LIST_REFRESH, ZONE_ADD, ZONE_DEL, ZONE_DEL_FETCH, ZONE_ADD_FETCH,ZONE_LIST_FETCH,ZONE_NOT_FETCHING} from '../actions';
let defaultState = {
    zones: [],
    isFetching: false
};

const reducers = ( state = defaultState, action) => {
    switch (action.type) {
        case ZONE_ADD:
            const newState = Object.assign({},state);
            newState.zones = [...state.zones,action.zone];
            newState.isFetching = false;
            return newState;
        case ZONE_DEL:
            const delState = {isFetching: false};
            delState.zones = state.zones.filter((item)=>action.zone !== item);
            return delState;
        case ZONE_LIST_REFRESH:
            const newState2 = Object.assign({},state);
            console.log('Actions zones : ' + action.zones);
            newState2.zones = [...action.zones];
            newState2.isFetching = false;
            return newState2;
        case ZONE_ADD_FETCH:
        case ZONE_DEL_FETCH:
        case ZONE_LIST_FETCH:
            return {
                ...state,
                isFetching: true
            };
        case ZONE_NOT_FETCHING:
        return {
            ...state,
            isFetching: false
        };
        default:
            return state;
    }
}

export default reducers;