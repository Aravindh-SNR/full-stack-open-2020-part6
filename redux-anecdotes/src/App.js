import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdoteService from './services/anecdotes';
import { initializeAnecdotes } from './reducers/anecdotes';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll()
      .then(anecdotes => {
        dispatch(initializeAnecdotes(anecdotes));
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;