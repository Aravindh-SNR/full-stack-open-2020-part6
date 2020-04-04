import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import anecdotes from './reducers/anecdotes';
import notification from './reducers/notification';
import filter from './reducers/filter';

const reducer = combineReducers({
    anecdotes,
    notification,
    filter
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;