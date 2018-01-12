import axios from 'axios';
import processAJAXError from '../helpers/processAJAXError';

const API_URL = process.env.API_URL || 'http://localhost:3001/api';  // express server URI

// CREATE AXIOS INSTANCE

const api = axios.create({
  baseURL: API_URL,
  // If it takes longer than 1s then it stops
  timeout: 1000,
  headers: { Accept: 'application/json' }
});

/**
 * This function wraps an axios instance and makes a post
 *  request against it
 * @param {String} path - URI path for some post request
 * @param {Object} data - data object
 */


// export function postRequest(path, data) {
//   api
//     .post(path, data)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       return processAJAXError(error);
//     });
// }

export function getUsers(path) {
  return api
    .get(path)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return processAJAXError(error);
    });
}