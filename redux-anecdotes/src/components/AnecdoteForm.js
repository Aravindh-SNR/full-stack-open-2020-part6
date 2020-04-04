import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotes';
import { setNotification } from '../reducers/notification';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const add = async event => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';

        const newAnecdote = await anecdoteService.createAnecdote({ content, votes: 0 });
        dispatch(addAnecdote(newAnecdote));
        dispatch(setNotification(`You added '${content}'`));
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

export default AnecdoteForm;