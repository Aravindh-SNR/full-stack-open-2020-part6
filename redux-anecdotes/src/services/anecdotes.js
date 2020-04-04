import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createAnecdote = async anecdote => {
    const response = await axios.post(baseUrl, anecdote);
    return response.data;
};

const updateVotes = async ({ id, content, votes }) => {
    const response = await axios.put(`${baseUrl}/${id}`, { content, votes: votes + 1 });
    return response.data;
};

export default { getAll, createAnecdote, updateVotes };