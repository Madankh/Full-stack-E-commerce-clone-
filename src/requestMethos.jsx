import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzE4MWFhMGZkODMzMjFlMDUxYTQzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDgzMzc3OSwiZXhwIjoxNjQxNDM4NTc5fQ.UOn3fNIXGICZkigqp730arPSaC3v1XkPcEvPPYr5smE'

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`${TOKEN}`}
})