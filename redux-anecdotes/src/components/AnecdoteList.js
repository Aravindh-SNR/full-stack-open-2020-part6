import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdotes';
import { setNotification } from '../reducers/notification';

const AnecdoteList = ({ anecdotes, filter, voteAnecdote, setNotification }) => {
    const vote = anecdote => {
        voteAnecdote(anecdote);
        setNotification(`You voted '${anecdote.content}'`, 10);
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

const mapStateToProps = ({ anecdotes, filter }) => { 
    return {
        anecdotes,
        filter
    };
};

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);