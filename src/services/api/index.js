import client from "./client";
import requestInterceptor from "./interceptors/requestInterceptor";
import responseInterceptor from "./interceptors/responseInterceptor";

requestInterceptor(client);
responseInterceptor(client);

export default client;