import { useEffect, useState } from "react";
import {
  FormErrorMessage,
  FormControl,
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
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { GetCompanyEmployees } from "../services";
import { useApi } from "../services/useApi";

import "../style/turnover.css";

export const Turnover = (props) => {
  const toast = useToast();
  const request = useApi();
  const [employees, setEmployees] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    request((accessToken) => GetCompanyEmployees(accessToken)).then(
      (employees) => {
        setEmployees(employees.data);
      }
    );
  }, []);

  const onSubmit = async (values) => {
    try {
      // await Turnover(values);

      toast({
        title: "Turnover successfully added.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Turnover was not added.",
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
        <ModalHeader color="white">Turnover</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={errors.employee_id}
              pb={errors.employee_id ? 0 : 5}
              mb={2}
              mr={2}
            >
              <FormLabel color="white" htmlFor="employee_id">
                Select Employee
              </FormLabel>
              <Select
                id="employee_id"
                placeholder="Employee"
                backgroundColor="white"
                {...register("employee_id", {
                  required: "This field is required",
                })}
              >
                {employees.map((employee) => (
                  <option value={employee.id} key={employee.id}>
                    {employee.first_name} {employee.last_name}
                  </option>
                ))}
              </Select>
              <FormErrorMessage mt={0}>
                {errors.employee_id && errors.employee_id.message}
              </FormErrorMessage>
            </FormControl>

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

export default Turnover;
