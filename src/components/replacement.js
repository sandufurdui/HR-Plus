// import "../style/replacement.css";
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

export const Replacement = (props) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      // await ReplacementCost(values);

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
    };
  };

  return (
    <Modal isOpen onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="blue.700">
        <ModalHeader color="white">Add replacement</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={errors?.company_id}
              pb={errors?.company_id ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="company_id"
                name="company_id"
                backgroundColor="white"
                placeholder="company_id"
                {...register("company_id", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.company_id && errors?.company_id.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.advertising_fees_per_termination}
              pb={errors?.advertising_fees_per_termination ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="advertising_fees_per_termination"
                name="advertising_fees_per_termination"
                backgroundColor="white"
                placeholder="advertising_fees_per_termination"
                {...register("advertising_fees_per_termination", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.advertising_fees_per_termination && errors?.advertising_fees_per_termination.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.job_availability_communication_time}
              pb={errors?.job_availability_communication_time ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="job_availability_communication_time"
                name="job_availability_communication_time"
                backgroundColor="white"
                placeholder="job_availability_communication_time"
                {...register("job_availability_communication_time", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.advertising_fees_per_termination && errors?.advertising_fees_per_termination.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.interview_time}
              pb={errors?.interview_time ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="interview_time"
                name="interview_time"
                backgroundColor="white"
                placeholder="interview_time"
                {...register("interview_time", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.interview_time && errors?.interview_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.number_of_interviews}
              pb={errors?.number_of_interviews ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="number_of_interviews"
                name="number_of_interviews"
                backgroundColor="white"
                placeholder="number_of_interviews"
                {...register("number_of_interviews", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.number_of_interviews && errors?.number_of_interviews.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.number_of_test_given}
              pb={errors?.number_of_test_given ? 0 : 5}
              mb={2}
            >
              <Input
                type="number"
                id="number_of_test_given"
                name="number_of_test_given"
                backgroundColor="white"
                placeholder="number_of_test_given"
                {...register("number_of_test_given", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.number_of_test_given && errors?.number_of_test_given.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.cost_of_materials_per_person}
              pb={errors?.cost_of_materials_per_person ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="cost_of_materials_per_person"
                name="cost_of_materials_per_person"
                backgroundColor="white"
                placeholder="cost_of_materials_per_person"
                {...register("cost_of_materials_per_person", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.cost_of_materials_per_person && errors?.cost_of_materials_per_person.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.cost_of_scoring_per_person}
              pb={errors?.cost_of_scoring_per_person ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="cost_of_scoring_per_person"
                name="cost_of_scoring_per_person"
                backgroundColor="white"
                placeholder="cost_of_scoring_per_person"
                {...register("cost_of_scoring_per_person", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.cost_of_scoring_per_person && errors?.cost_of_scoring_per_person.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.preemployeement_admin_fun_time}
              pb={errors?.preemployeement_admin_fun_time ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="preemployeement_admin_fun_time"
                name="preemployeement_admin_fun_time"
                backgroundColor="white"
                placeholder="preemployeement_admin_fun_time"
                {...register("preemployeement_admin_fun_time", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.preemployeement_admin_fun_time && errors?.preemployeement_admin_fun_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.acquiring_and_disseminating_time}
              pb={errors?.acquiring_and_disseminating_time ? 0 : 5}
              mb={2}
            >
              <Input
                type="text"
                id="acquiring_and_disseminating_time"
                name="acquiring_and_disseminating_time"
                backgroundColor="white"
                placeholder="acquiring_and_disseminating_time"
                {...register("acquiring_and_disseminating_time", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.acquiring_and_disseminating_time && errors?.acquiring_and_disseminating_time.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.start_date}
              pb={errors?.start_date ? 0 : 5}
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
              <FormErrorMessage mt={0}>
                {errors?.start_date && errors?.start_date.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.end_date}
              pb={errors?.end_date ? 0 : 5}
              mb={2}
            >
              <Input
                type="date"
                id="end_date"
                backgroundColor="white"
                name="end_date"
                placeholder="Start date"
                required
                {...register("end_date", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors?.end_date && errors?.end_date.message}
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


export default Replacement;
