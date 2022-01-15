import { useAuth0 } from "@auth0/auth0-react";
import { Text, Flex, Image, Button, Box } from "@chakra-ui/react";

import Logo from "../assets/HR-app_logo.svg";

export const Registration = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Text fontSize="6xl" fontWeight="bold" color="blue.800">
        Welcome to
      </Text>
      <Image src={Logo} alt="logo" width={100} mt={-6} />

      <Box mt={5}>
        <Button
          colorScheme="red"
          onClick={() => loginWithRedirect({ audience: "http://hrplus" })}
        >
          Login
        </Button>
        <Button ml={20} colorScheme="red" as={"a"} href="/create-company">
          Create a Company
        </Button>
      </Box>
    </Flex>
  );
};
