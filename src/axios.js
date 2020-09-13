import axios from 'axios';

const instance = axios.create({
    // THE API URL (CLOUD FUNCTIONS)
    baseURL: 'https://us-central1-clone-6c27d.cloudfunctions.net/api'
});

export default instance;

//live server
//https://us-central1-clone-6c27d.cloudfunctions.net/api

//local
//http://localhost:5001/clone-6c27d/us-central1/api