import axios from "axios";
import appConfig from "../../config/appConfig";

const client = axios.create({
    baseURL: appConfig.api.baseUrl,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;