import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_LOCATION_BASE_URL = 'http://localhost:8080/api/locations';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


export const getAllLocations = () => axios.get(REST_API_LOCATION_BASE_URL); // GET ALL

export const addLocation = (location) => axios.post(REST_API_LOCATION_BASE_URL, location) // ADD

export const getLocation = (id) => axios.get(REST_API_LOCATION_BASE_URL + '/' + id); // GET

export const updateLocation = (id, location) => axios.put(REST_API_LOCATION_BASE_URL + '/'+id, location); // UPDATE

export const deleteLocation = (id) => axios.delete(REST_API_LOCATION_BASE_URL + '/' +id); // DELETE