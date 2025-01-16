import axios from "axios";

export const AxiosSecured = axios.create({
    baseURL: 'http://localhost:3000'
  });
const useAxiosSecured = () => {
    return (
        AxiosSecured
    );
};

export default useAxiosSecured;