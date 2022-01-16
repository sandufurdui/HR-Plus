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
  Textarea,
  Checkbox,
} from "@chakra-ui/react";

import "../style/meeting.css";

export const MeetingPopUp = (props) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      // await Meeting(values);

      toast({
        title: "Successfully added.",
        description: "The meeting was created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Meeting was not added.",
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
        <ModalHeader color="white">Add meeting</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={errors.name}
              pb={errors.name ? 0 : 5}
              mb={2}
              mr={2}
            >
              <Input
                id="name"
                placeholder="Meeting name"
                backgroundColor="white"
                {...register("name", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">Meeting Time and Duration</FormLabel>

            <FormControl
              isInvalid={errors.date}
              pb={errors.date ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="date">
                  Date
                </FormLabel>
                <Input
                  type="date"
                  id="date"
                  backgroundColor="white"
                  name="date"
                  required
                  {...register("date", {
                    required: "This field is required",
                  })}
                />
              </Flex>
            </FormControl>
            <FormControl
              isInvalid={errors.duration}
              pb={errors.duration ? 0 : 5}
              mb={2}
            >
              <Flex direction="row">
                <FormLabel color="white" htmlFor="duration">
                  Wage
                </FormLabel>
                <Input
                  type="number"
                  id="duration"
                  name="duration"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("duration", {
                    required: "This field is required",
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors.duration && errors.duration.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.meeting_notes}
              pb={errors.meeting_notes ? 0 : 5}
              mb={2}
            >
              <FormLabel color="white" htmlFor="meeting_notes">
                Meeting Notes
              </FormLabel>
              <Textarea
                id="meeting_notes"
                name="meeting_notes"
                backgroundColor="white"
                placeholder="Notes..."
                size="md"
                {...register("meeting_notes", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage mt={0}>
                {errors.meeting_notes && errors.meeting_notes.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.is_interview}
              pb={errors.is_interview ? 0 : 5}
              mb={2}
            >
              <Flex justifyContent="right">
                <Checkbox id="is_interview" name="is_interview" color="white">
                  Interview
                </Checkbox>
              </Flex>
              <FormErrorMessage mt={0}>
                {errors.is_interview && errors.is_interview.message}
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

export default MeetingPopUp;
