export default function responseInterceptor(client) {

    client.interceptors.response.use(

        (response) => response,

        (error) => {

            console.error(error);

            return Promise.reject(error);

        }

    );

}