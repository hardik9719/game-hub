import axios, {CanceledError} from "axios";
export default axios.create({
    baseURL:"/api",
    headers: {
        "Content-Type": "text/plain", // Set content type to text/plain
      },
})
export {CanceledError}
