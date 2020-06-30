import * as ActionTypes from './ActionTypes';

export const Service = (state = {
        isLoading: true,
        errMess: null,
        service: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SERVICE:
            return {...state, isLoading: false, errMess: null, service: action.payload}

        case ActionTypes.SERVICE_LOADING:
            return {...state, isLoading: true, errMess: null, service: []}

        case ActionTypes.SERVICE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, service: []}

        default:
            return state;
    }
}