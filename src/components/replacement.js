import { ReplacementCost } from "../services";
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

import { useApi } from "../services/useApi";

export const Replacement = (props) => {
  const toast = useToast();
  const request = useApi();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await request((accessToken) => ReplacementCost(values, accessToken));

      toast({
        title: "Replacement Cost added.",
        description: "Replacement Cost added.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Replacement Cost not added.",
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
        <ModalHeader color="white">Add replacement</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel color="white">Advertising Details</FormLabel>

            <FormControl
              isInvalid={errors?.advertising_fees_per_termination}
              pb={errors?.advertising_fees_per_termination ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel
                  color="white"
                  htmlFor="advertising_fees_per_termination"
                >
                  Advertising fees/termination
                </FormLabel>
                <Input
                  type="text"
                  id="advertising_fees_per_termination"
                  name="advertising_fees_per_termination"
                  backgroundColor="white"
                  placeholder="0.00"
                  {...register("advertising_fees_per_termination", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.advertising_fees_per_termination &&
                  errors?.advertising_fees_per_termination.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.job_availability_communication_time}
              pb={errors?.job_availability_communication_time ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel
                  color="white"
                  htmlFor="job_availability_communication_time"
                >
                  Job vacancy communication time
                </FormLabel>
                <Input
                  type="number"
                  id="job_availability_communication_time"
                  name="job_availability_communication_time"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("job_availability_communication_time", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.job_availability_communication_time &&
                  errors?.job_availability_communication_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">Interviewing Details</FormLabel>

            <FormControl
              isInvalid={errors?.interview_time}
              pb={errors?.interview_time ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="interview_time">
                  Interview time
                </FormLabel>
                <Input
                  type="number"
                  id="interview_time"
                  name="interview_time"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("interview_time", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.interview_time && errors?.interview_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.number_of_interviews}
              pb={errors?.number_of_interviews ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="number_of_interviews">
                  Interviews amount
                </FormLabel>
                <Input
                  type="number"
                  id="number_of_interviews"
                  name="number_of_interviews"
                  backgroundColor="white"
                  placeholder="1"
                  min="1"
                  {...register("number_of_interviews", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.number_of_interviews &&
                  errors?.number_of_interviews.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.number_of_test_given}
              pb={errors?.number_of_test_given ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="number_of_test_given">
                  Tests given
                </FormLabel>
                <Input
                  type="number"
                  id="number_of_test_given"
                  name="number_of_test_given"
                  backgroundColor="white"
                  placeholder="1"
                  min="1"
                  {...register("number_of_test_given", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.number_of_test_given &&
                  errors?.number_of_test_given.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">Costs</FormLabel>

            <FormControl
              isInvalid={errors?.cost_of_materials_per_person}
              pb={errors?.cost_of_materials_per_person ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="cost_of_materials_per_person">
                  Costs of materials/person
                </FormLabel>
                <Input
                  type="number"
                  id="cost_of_materials_per_person"
                  name="cost_of_materials_per_person"
                  backgroundColor="white"
                  placeholder="0.00"
                  {...register("cost_of_materials_per_person", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.cost_of_materials_per_person &&
                  errors?.cost_of_materials_per_person.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.cost_of_scoring_per_person}
              pb={errors?.cost_of_scoring_per_person ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="cost_of_scoring_per_person">
                  Costs of scoring/person
                </FormLabel>
                <Input
                  type="text"
                  id="cost_of_scoring_per_person"
                  name="cost_of_scoring_per_person"
                  backgroundColor="white"
                  placeholder="0.00"
                  {...register("cost_of_scoring_per_person", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.cost_of_scoring_per_person &&
                  errors?.cost_of_scoring_per_person.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">Integration process</FormLabel>

            <FormControl
              isInvalid={errors?.preemployeement_admin_fun_time}
              pb={errors?.preemployeement_admin_fun_time ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel
                  color="white"
                  htmlFor="preemployeement_admin_fun_time"
                >
                  Pre-employment admin functions
                </FormLabel>
                <Input
                  type="number"
                  id="preemployeement_admin_fun_time"
                  name="preemployeement_admin_fun_time"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("preemployeement_admin_fun_time", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.preemployeement_admin_fun_time &&
                  errors?.preemployeement_admin_fun_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.acquiring_and_disseminating_time}
              pb={errors?.acquiring_and_disseminating_time ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel
                  color="white"
                  htmlFor="acquiring_and_disseminating_time"
                >
                  Acquiring and disseminating
                </FormLabel>
                <Input
                  type="text"
                  id="acquiring_and_disseminating_time"
                  name="acquiring_and_disseminating_time"
                  backgroundColor="white"
                  placeholder="Hours"
                  {...register("acquiring_and_disseminating_time", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.acquiring_and_disseminating_time &&
                  errors?.acquiring_and_disseminating_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.start_date}
              pb={errors?.start_date ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="start_date">
                  Start Date
                </FormLabel>
                <Input
                  type="date"
                  id="start_date"
                  backgroundColor="white"
                  name="start_date"
                  required
                  {...register("start_date", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.start_date && errors?.start_date.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.end_date}
              pb={errors?.end_date ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="end_date">
                  End Date
                </FormLabel>
                <Input
                  type="date"
                  id="end_date"
                  backgroundColor="white"
                  name="end_date"
                  required
                  {...register("end_date", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors?.end_date && errors?.end_date.message}
              </FormErrorMessage>
            </FormControl>

            <Flex justifyContent="center">
              <Button type="submit" colorScheme="red" isLoading={isSubmitting} >
                Submit
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Replacement;
