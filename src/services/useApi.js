import { useAuth0 } from "@auth0/auth0-react";

const useApi = () => {
  const { getAccessTokenSilently } = useAuth0();

  const request = async (service) => {
    try {
      const accessToken = await getAccessTokenSilently();

      return await service(accessToken);
    } catch (error) {
      return null;
    }
  };

  return request;
};

export { useApi };
