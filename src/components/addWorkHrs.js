import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button,
    ModalOverlay,
    useToast,
    Modal,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    useNumberInput,
    HStack,
    Flex
} from "@chakra-ui/react";

import { WorkHours } from "../services";
import { useApi } from "../services/useApi";


export const AddWorkHours = (props) => {
    const toast = useToast();
      const request = useApi();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (values) => {
        try {
            await request ((accessToken) => WorkHours(values, accessToken));

            toast({
                title: "Worked Hours added.",
                description: "Worked Hours has been successfully added.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } catch {
            toast({
                title: "Work Hours not added.",
                description: "Please check the introduced data.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        };
    };

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 8,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    return (
        <Modal isOpen onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor="blue.700">
                <ModalHeader color="white">Add Worked Hours</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={errors?.worked_hours}
                            pb={errors?.worked_hours ? 0 : 5}
                            mb={2}
                        >
                            <HStack >
                                <Button {...dec}>-</Button>
                                <Input id="worked_hours" color="white" {...input} />
                                <Button {...inc}>+</Button>
                            </HStack>
                            <FormErrorMessage mt={0}>
                                {errors?.worked_hours && errors?.worked_hours.message}
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
}

export default AddWorkHours;
