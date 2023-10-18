import axios from "axios";
import { getToken } from "./AuthService";

const JOB_BASE_URL = 'http://localhost:8080/api/jobs';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


export const getAllJobs = () => axios.get(JOB_BASE_URL); // GET ALL

export const createJob = (job) => axios.post(JOB_BASE_URL, job); // ADD

export const getJobById = (id) => axios.get(JOB_BASE_URL + '/' + id); // GET // it was id, job i removed job if you get any errors...

export const updateJob = (id, job) => axios.put(JOB_BASE_URL + '/' + id, job); // UPDATE

export const deleteJob = (id) => axios.delete(JOB_BASE_URL + '/' + id); // DELETE