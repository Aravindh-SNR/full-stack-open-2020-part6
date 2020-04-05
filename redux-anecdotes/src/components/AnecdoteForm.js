import React from 'react';
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotes';
import { setNotification } from '../reducers/notification';

const AnecdoteForm = ({ addAnecdote, setNotification }) => {
    const add = async event => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        addAnecdote(content);
        setNotification(`You added '${content}'`, 10);
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    );
};

export default connect(null, { addAnecdote, setNotification })(AnecdoteForm);