import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Text,
  Flex,
  Box,
  useToast,
} from "@chakra-ui/react";
import { CreateCompany } from "../services";

const CreateCompanyForm = () => {
  const { loginWithRedirect } = useAuth0();

  const toast = useToast();

  const {
    errors,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      console.log({ values });
      const company = await CreateCompany(values);
      console.log(company);
      if (company.data.id) {
        loginWithRedirect();
      }
    } catch {
      toast({
        title: "Company was not created.",
        description:
          "A company with such name or a user with such email already exists",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text fontSize="3xl" mb={5} textAlign="center">
        Create a Company
      </Text>

      <Box background="blue.700" borderRadius="xl" padding={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            isInvalid={errors?.name}
            pb={errors?.name ? 0 : 5}
            mb={2}
          >
            <Input
              id="name"
              placeholder="Company name"
              backgroundColor="white"
              {...register("name", {
                required: "This field is required",
              })}
            />
            <FormErrorMessage mt={0}>
              {errors?.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors?.email}
            pb={errors?.email ? 0 : 5}
            mb={2}
          >
            <Input
              id="email"
              type="email"
              placeholder="Email"
              backgroundColor="white"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <FormErrorMessage mt={0}>
              {errors?.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <Flex justifyContent="center">
            <Button type="submit" colorScheme="red" isLoading={isSubmitting}>
              Create and Sign-up
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export { CreateCompanyForm };
