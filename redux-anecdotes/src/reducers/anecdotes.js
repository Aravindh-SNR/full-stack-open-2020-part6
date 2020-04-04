const anecdotes = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload;
    case 'VOTE_ANECDOTE':
      const { id } = action.payload;
      return state.map(anecdote => (
        anecdote.id !== id ? anecdote : { ...anecdote, votes: anecdote.votes + 1 }
      ));
    case 'ADD_ANECDOTE':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export const initializeAnecdotes = anecdotes => (
  {
    type: 'INIT_ANECDOTES',
    payload: anecdotes
  }
);

export const voteAnecdote = id => (
  {
    type: 'VOTE_ANECDOTE',
    payload: {
      id
    }
  }
);

export const addAnecdote = anecdote => (
  {
    type: 'ADD_ANECDOTE',
    payload: anecdote
  }
);

export default anecdotes;