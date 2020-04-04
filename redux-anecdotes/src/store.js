import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdotes from './reducers/anecdotes';
import notification from './reducers/notification';
import filter from './reducers/filter';

const reducer = combineReducers({
    anecdotes,
    notification,
    filter
});

const store = createStore(reducer, composeWithDevTools());

export default store;