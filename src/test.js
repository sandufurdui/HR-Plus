import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} isInvalid={errors.surname}>
        
        <label>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 6, message: "Minimum length should be 6" }
          })}
        /></label>
        <label>
        <Input
          id="surname"
          placeholder="surname"
          {...register("surname", {
            required: "This is required",
            minLength: { value: 6, message: "Minimum length should be 6" }
          })}
        /></label>


        <FormErrorMessage>
          {errors.name && errors.name.message}
          {errors.surname && errors.surname.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}