import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  FormLabel,
  Flex,
  ModalOverlay,
  useToast,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from "@chakra-ui/react";

import { CreateEmployee } from "../services";
import { useApi } from "../services/useApi";

export const Employee = (props) => {
  const toast = useToast();
  const request = useApi();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await request((accessToken) => CreateEmployee(values, accessToken));

      toast({
        title: "Employee account successfully created.",
        description: "We sent an invitation to the newly created employee",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Account was not created.",
        description: "Please check the introduced data.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="blue.700">
        <ModalHeader color="white">Create an employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>
              <FormControl
                isInvalid={errors.first_name}
                pb={errors.first_name ? 0 : 5}
                mb={2}
                mr={2}
              >
                <FormLabel color="white" htmlFor="first_name">
                  First Name
                </FormLabel>
                <Input
                  id="first_name"
                  placeholder="First Name"
                  backgroundColor="white"
                  {...register("first_name", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage mt={0}>
                  {errors.first_name && errors.first_name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.last_name}
                pb={errors.last_name ? 0 : 5}
                mb={2}
              >
                <FormLabel color="white" htmlFor="last_name">
                  Surname
                </FormLabel>
                <Input
                  id="last_name"
                  placeholder="Surname"
                  backgroundColor="white"
                  {...register("last_name", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage mt={0}>
                  {errors.last_name && errors.last_name.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl
              isInvalid={errors.email}
              pb={errors.email ? 0 : 5}
              mb={2}
            >
              <FormLabel color="white" htmlFor="email">
                Email
              </FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                backgroundColor="white"
                placeholder="Email"
                {...register("email", {
                  required: "This field is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage mt={0}>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.wage}
              pb={errors.wage ? 0 : 5}
              mb={2}
            >
              <FormLabel color="white" htmlFor="wage">
                Wage
              </FormLabel>
              <Input
                type="number"
                id="wage"
                name="wage"
                backgroundColor="white"
                placeholder="Wage"
                {...register("wage", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                  },
                })}
              />
              <FormErrorMessage mt={0}>
                {errors.wage && errors.wage.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.managed_by_id}
              pb={errors.managed_by_id ? 0 : 5}
              mb={2}
            >
              <FormLabel color="white" htmlFor="managed_by_id">
                Managed by ID
              </FormLabel>
              <Input
                type="text"
                id="managed_by_id"
                backgroundColor="white"
                name="managed_by_id"
                placeholder="Managed by ID"
              />
              <FormErrorMessage mt={0}>
                {errors.managed_by_id && errors.managed_by_id.message}
              </FormErrorMessage>
            </FormControl>
            <Flex>
              <FormControl
                isInvalid={errors.role}
                pb={errors.role ? 0 : 5}
                mb={2}
                mr={2}
              >
                <FormLabel color="white" htmlFor="role">
                  Role
                </FormLabel>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  backgroundColor="white"
                  placeholder="Role"
                  {...register("role", {
                    required: "This field is required",
                  })}
                />
                <FormErrorMessage mt={0}>
                  {errors.role && errors.role.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.start_date}
                pb={errors.start_date ? 0 : 5}
                mb={2}
              >
                <FormLabel color="white" htmlFor="start_date">
                  Start date
                </FormLabel>
                <Input
                  type="date"
                  id="start_date"
                  backgroundColor="white"
                  name="start_date"
                  placeholder="Start date"
                  required
                  {...register("start_date", {
                    required: "This field is required",
                  })}
                />
              </FormControl>
            </Flex>
            <Flex justifyContent="center">
              <Button type="submit" colorScheme="red" isLoading={isSubmitting}>
                Submit
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
