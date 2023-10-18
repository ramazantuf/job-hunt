import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_STAGE_BASE_URL = 'http://localhost:8080/api/stages';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export const getAllStages = () => axios.get(REST_API_STAGE_BASE_URL); // GET ALL

export const addStage = (stage) => axios.post(REST_API_STAGE_BASE_URL, stage); // ADD

export const deleteStage = (id) => axios.delete(REST_API_STAGE_BASE_URL + '/' + id) // DELETE

export const updateStage = (id, stage) => axios.put(REST_API_STAGE_BASE_URL + '/' + id, stage); // UPDATE

export const getStage = (id) => axios.get(REST_API_STAGE_BASE_URL + '/' + id) // GET