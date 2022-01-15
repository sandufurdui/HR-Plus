import "../style/replacement.css";
import { WorkHours } from "../services";
import { FormControl, useToast, FormErrorMessage, Input, useNumberInput, Button, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const AddWorkHours = () => {
    const toast = useToast();
    const { errors, handleSubmit } = useForm()

    const onSubmit = async (values) => {
        try {
            await WorkHours(values);
            // console.log(replacement_cost);
            toast({
                title: "Work Hours added.",
                description: "Work Hours added.",
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
        <div>
            <div id="addWorkHrs" className="overlay">
                <div className="popup">
                    <div className="pop-div">
                        <h2 />
                        <a className="close" href="#">
                            &times;
                        </a>
                        <form className="addWorkHrs-form" onSubmit={handleSubmit(onSubmit)}>
                            <FormControl
                                isInvalid={errors?.worked_hours}
                                pb={errors?.worked_hours ? 0 : 5}
                                mb={2}
                            >
                                <HStack >
                                    <Button {...dec}>-</Button>
                                    <Input id="worked_hours" {...input} />
                                    <Button {...inc}>+</Button>
                                </HStack>
                                <FormErrorMessage mt={0}>
                                    {errors?.worked_hours && errors?.worked_hours.message}
                                </FormErrorMessage>
                            </FormControl>

                            <button className="button-design" type="submit" value="Submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddWorkHours;
