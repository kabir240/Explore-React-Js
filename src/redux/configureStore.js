import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Blogs } from './blogs';
import { Topblogs } from './topBlogs';
import { Service } from './service';
import { Tours } from './tours';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback, InitialSignUp } from './forms';


export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            tours: Tours,
            service: Service,
            blogs: Blogs,
            topblogs: Topblogs,
            ...createForms({
                feedback: InitialFeedback,
                signup: InitialSignUp
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}