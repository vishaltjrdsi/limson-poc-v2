import TokenService from "../../../auth/services/TokenService";

export default function requestInterceptor(client) {

    client.interceptors.request.use(

        async (config) => {

            const token =
                await TokenService.getAccessToken();

            if (token) {

                config.headers.Authorization =
                    `Bearer ${token}`;

            }

            return config;

        }

    );

}