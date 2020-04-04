import anecdoteService from '../services/anecdotes';

const anecdotes = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload;
    case 'VOTE_ANECDOTE':
      return state.map(anecdote => (
        anecdote.id !== action.payload.id ? anecdote : { ...anecdote, votes: anecdote.votes + 1 }
      ));
    case 'ADD_ANECDOTE':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: anecdotes
    });
  };
};

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVotes(anecdote);
    dispatch({
      type: 'VOTE_ANECDOTE',
      payload: updatedAnecdote
    });
  };
};

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote({ content, votes: 0 });
    dispatch({
      type: 'ADD_ANECDOTE',
      payload: newAnecdote
    });
  }
};

export default anecdotes;