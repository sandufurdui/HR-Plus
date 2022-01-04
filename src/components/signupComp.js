import React, { Component } from "react";
import "../style/sign_up.css";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
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
    <div class="container-sign-up">
      <div>
        <h1 class="sign-up-title">Sign up</h1>{" "}
      </div>
      <div class="sign-up-div">
        <form class="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name} isInvalid={errors.surname}>
            <fieldset>
              <label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...register("name", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.name && errors.name.message}
                </div>
              </label>
              <label>
                <Input
                  id="surname"
                  placeholder="Surname"
                  {...register("surname", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                  type="text"
                />
                <br />
                <div class="red-alert">
                  {errors.surname && errors.surname.message}
                </div>
              </label>
              <label>
                <Input
                  type="number"
                  id="Wage"
                  name="Wage"
                  placeholder="Wage"
                  {...register("wage", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.wage && errors.wage.message}
                </div>
              </label>
              <label>
                <Input
                  type="text"
                  id="companyId"
                  name="companyId"
                  placeholder="Company ID"
                  {...register("companyid", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.companyid && errors.companyid.message}
                </div>
              </label>
              <label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.email && errors.email.message}
                </div>
              </label>
              <label>
                <Input
                  type="password"
                  name="password"
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
                <br />
                <div class="red-alert">
                  {errors.password && errors.password.message}
                </div>
              </label>
              <label>
                <Input
                  type="text"
                  id="managedById"
                  name="managedById"
                  placeholder="Managed by ID"
                  {...register("managerid", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.managerid && errors.managerid.message}
                </div>
              </label>
              <label>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Role"
                  {...register("role", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <br />
                <div class="red-alert">
                  {errors.role && errors.role.message}
                </div>
              </label>
              <label>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder="Start date"
                  required
                />
              </label>
              <Button
                type="submit"
                id="submitbutton"
                value="Sign Up"
                colorScheme="teal"
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </fieldset>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
