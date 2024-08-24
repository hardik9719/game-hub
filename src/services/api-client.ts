import axios, {CanceledError} from "axios";
export default axios.create({
    baseURL:"https://express-proxy-3bksjzsth-hardik-tannas-projects.vercel.app",
    headers: {
        "Content-Type": "text/plain", // Set content type to text/plain
      },
})
export {CanceledError}
