import React from "react";
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
import { CreateEmployee } from "../services";

export const EmployeeSignUp = () => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await CreateEmployee(values);

      toast({
        title: "Account created.",
        description: "Employee account successfully created.",
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
    <Flex direction="column" alignItems="center">
      <Text fontSize="3xl" mt={10} mb={5} textAlign="center">
        Sign up
      </Text>

      <Box p={5} minW={500} borderRadius="lg" background="blue.700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            isInvalid={errors.first_name}
            pb={errors.first_name ? 0 : 5}
            mb={2}
          >
            <Input
              id="first_name"
              placeholder="Name"
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

          <FormControl isInvalid={errors.wage} pb={errors.wage ? 0 : 5} mb={2}>
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
            isInvalid={errors.email}
            pb={errors.email ? 0 : 5}
            mb={2}
          >
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
            isInvalid={errors.managed_by_id}
            pb={errors.managed_by_id ? 0 : 5}
            mb={2}
          >
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

          <FormControl
            isInvalid={errors.work_hours}
            pb={errors.work_hours ? 0 : 5}
            mb={2}
          >
            <Input
              type="number"
              id="work_hours"
              backgroundColor="white"
              name="work_hours"
              placeholder="Work hours"
              {...register("work_hours", {
                required: "This field is required",
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.work_hours && errors.work_hours.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.role_id}
            pb={errors.role_id ? 0 : 5}
            mb={2}
          >
            <Input
              type="text"
              id="role_id"
              name="role_id"
              backgroundColor="white"
              placeholder="Role"
              {...register("role_id", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.role_id && errors.role_id.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.start_date}
            pb={errors.start_date ? 0 : 5}
            mb={2}
          >
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

          <Flex justifyContent="center">
            <Button type="submit" colorScheme="red" isLoading={isSubmitting}>
              Sign Up
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};
