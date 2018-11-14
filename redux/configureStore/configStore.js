import { combineReducers, createStore, compose, applyMiddleware } from 'redux'

import sharePlaceReducer from '../reducer/sharePlaceReducer';

import thunk from 'redux-thunk'
const ReducerCombination = combineReducers({
    sharePlace: sharePlaceReducer
})

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default configure = () => {
    return createStore(ReducerCombination, composeEnhancers(applyMiddleware(thunk)))
}