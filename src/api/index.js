
import axios from 'axios';

const url = 'http://localhost:5000/users';

export const createUser = (newPost) => axios.post(url, newPost);
