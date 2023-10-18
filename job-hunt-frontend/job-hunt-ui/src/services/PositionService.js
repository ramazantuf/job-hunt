import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_POSITION_BASE_URL = 'http://localhost:8080/api/positions';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


export const getAllPositions = () => axios.get(REST_API_POSITION_BASE_URL); // GET ALL

export const addPosition = (position) => axios.post(REST_API_POSITION_BASE_URL, position); // ADD 

export const deletePosition = (id) => axios.delete(REST_API_POSITION_BASE_URL + '/' + id); // DELETE

export const updatePosition = (id, position) => axios.put(REST_API_POSITION_BASE_URL + '/' + id, position); // UPDATE

export const getPosition = (id) => axios.get(REST_API_POSITION_BASE_URL + '/' + id); // GET