import { useAuth0 } from "@auth0/auth0-react";

const useApi = () => {
  const { getAccessTokenSilently } = useAuth0();

  const request = async (service, options = { audience: "http://hrplus" }) => {
    try {
      const { audience, scope } = options;
      const accessToken = await getAccessTokenSilently({ audience, scope });
      return await service(accessToken);
    } catch (error) {
      return null;
    }
  };

  return request;
};

export { useApi };
