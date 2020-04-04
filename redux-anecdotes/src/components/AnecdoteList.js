import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdotes';
import { setNotification } from '../reducers/notification';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const vote = ({ id, content }) => {
        dispatch(voteAnecdote(id));
        dispatch(setNotification(`You voted '${content}'`));
    };
    
    return (
        <div>
            {
                anecdotes.length ?
                    []
                        .concat(anecdotes)
                        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
                        .sort((a, b) => b.votes - a.votes)
                        .map(anecdote =>
                            <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                            </div>
                            <div>
                                has {anecdote.votes}
                                <button onClick={() => vote(anecdote)}>vote</button>
                            </div>
                            </div>
                        )
                    :
                    <p>Loading anecdotes...</p>
            }
        </div>
    );
};

export default AnecdoteList;