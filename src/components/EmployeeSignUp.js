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
} from "@chakra-ui/react";

export const EmployeeSignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Flex direction="column" alignItems="center">
      <Text fontSize="3xl" mt={10} mb={5} textAlign="center">
        Sign up
      </Text>

      <Box p={5} minW={500} borderRadius="lg" background="blue.700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name} pb={errors.name ? 0 : 5} mb={2}>
            <Input
              id="name"
              placeholder="Name"
              backgroundColor="white"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.surname}
            pb={errors.surname ? 0 : 5}
            mb={2}
          >
            <Input
              id="surname"
              placeholder="Surname"
              backgroundColor="white"
              {...register("surname", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.surname && errors.surname.message}
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
            isInvalid={errors.companyId}
            pb={errors.companyId ? 0 : 5}
            mb={2}
          >
            <Input
              id="companyId"
              name="companyId"
              backgroundColor="white"
              placeholder="Company ID"
              {...register("companyId", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.companyId && errors.companyId.message}
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
            isInvalid={errors.password}
            pb={errors.password ? 0 : 5}
            mb={2}
          >
            <Input
              type="password"
              name="password"
              backgroundColor="white"
              id="password"
              placeholder="Create password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Minimum length should be 6",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.managedById}
            pb={errors.managedById ? 0 : 5}
            mb={2}
          >
            <Input
              type="text"
              id="managedById"
              backgroundColor="white"
              name="managedById"
              placeholder="Managed by ID"
              {...register("managedById", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.managedById && errors.managedById.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.role} pb={errors.role ? 0 : 5} mb={2}>
            <Input
              type="text"
              id="role"
              name="role"
              backgroundColor="white"
              placeholder="Role"
              {...register("role", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage mt={0}>
              {errors.role && errors.role.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.startDate}
            pb={errors.name ? 0 : 5}
            mb={2}
          >
            <Input
              type="date"
              id="startDate"
              backgroundColor="white"
              name="startDate"
              placeholder="Start date"
              required
              {...register("startDate", {
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
