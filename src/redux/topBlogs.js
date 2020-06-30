import * as ActionTypes from './ActionTypes';

export const Topblogs = (state = {
        isLoading: true,
        errMess: null,
        topblogs: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TOPBLOGS:
            return {...state, isLoading: false, errMess: null, topblogs: action.payload}

        case ActionTypes.TOPBLOGS_LOADING:
            return {...state, isLoading: true, errMess: null, topblogs: []}

        case ActionTypes.TOPBLOGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, topblogs: []}

        default:
            return state;
    }
}