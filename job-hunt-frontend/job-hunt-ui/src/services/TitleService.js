import axios from "axios";
import { getToken } from "./AuthService";

const TITLE_REST_API_BASE_URL = 'http://localhost:8080/api/titles'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export const getAllTitles = () => axios.get(TITLE_REST_API_BASE_URL); // GET ALL

export const addTitle = (title) => axios.post(TITLE_REST_API_BASE_URL, title); // ADD

export const deleteTitle = (id) => axios.delete(TITLE_REST_API_BASE_URL + '/' + id); // DELETE

export const getTitle = (id) => axios.get(TITLE_REST_API_BASE_URL + '/' + id); // GET

export const updateTitle = (id, title) => axios.put(TITLE_REST_API_BASE_URL + '/' + id, title); // UPDATE