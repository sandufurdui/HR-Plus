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

export const Training = (props) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      // await Training(values);

      toast({
        title: "Successfully added.",
        description: "The training was created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Training was not added.",
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
        <ModalHeader color="white">Add training</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel color="white">
              Training Time and Duration
            </FormLabel>
            <FormControl
              isInvalid={errors.date}
              pb={errors.date ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="date">
                  Date
                </FormLabel>
                <Input
                  type="date"
                  id="date"
                  backgroundColor="white"
                  name="date"
                  placeholder="Start date"
                  required
                  {...register("date", {
                    required: "This field is required",
                  })}
                />
              </Flex>
            </FormControl>
            <FormControl
              isInvalid={errors.instruction_hours}
              pb={errors.instruction_hours ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="instruction_hours">
                  Instruction Hours
                </FormLabel>
                <Input
                  type="number"
                  id="instruction_hours"
                  name="instruction_hours"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("instruction_hours", {
                    required: "This field is required"
                  })}
                />
              </Flex>
              <FormErrorMessage mt={0}>
                {errors.instruction_hours && errors.instruction_hours.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.training_program_length}
              pb={errors.training_program_length ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="training_program_length">
                  Training Length
                </FormLabel>
                <Input
                  type="number"
                  id="training_program_length"
                  name="training_program_length"
                  backgroundColor="white"
                  placeholder="Hours"
                  min="1"
                  {...register("training_program_length", {
                    required: "This field is required"
                  })}
                />
              </Flex >
              <FormErrorMessage mt={0}>
                {errors.training_program_length && errors.training_program_length.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">
              Trainer(s) Infromation
            </FormLabel>
            <FormControl
              isInvalid={errors.experienced_employees_assigned}
              pb={errors.experienced_employees_assigned ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="experienced_employees_assigned">
                  Trainers Assigned
                </FormLabel>
                <Input
                  type="number"
                  id="experienced_employees_assigned"
                  name="experienced_employees_assigned"
                  backgroundColor="white"
                  placeholder="1"
                  min="1"
                  {...register("experienced_employees_assigned", {
                    required: "This field is required"
                  })}
                />
              </Flex >
              <FormErrorMessage mt={0}>
                {errors.experienced_employees_assigned && errors.experienced_employees_assigned.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.avg_trainers_pay_rate}
              pb={errors.avg_trainers_pay_rate ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="avg_trainers_pay_rate">
                  Trainers Pay Rate
                </FormLabel>
                <Input
                  type="number"
                  id="avg_trainers_pay_rate"
                  name="avg_trainers_pay_rate"
                  backgroundColor="white"
                  placeholder="0.00"
                  min="1"
                  {...register("avg_trainers_pay_rate", {
                    required: "This field is required"
                  })}
                />
              </Flex >
              <FormErrorMessage mt={0}>
                {errors.avg_trainers_pay_rate && errors.avg_trainers_pay_rate.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel color="white">
              Final Costs
            </FormLabel>
            <FormControl
              isInvalid={errors.informational_package_cost}
              pb={errors.informational_package_cost ? 0 : 5}
              mb={2}
            >
              <Flex direction="row" >
                <FormLabel color="white" htmlFor="informational_package_cost">
                  Training Costs
                </FormLabel>
                <Input
                  type="number"
                  id="informational_package_cost"
                  name="informational_package_cost"
                  backgroundColor="white"
                  placeholder="0.00"
                  min="1"
                  {...register("informational_package_cost", {
                    required: "This field is required"
                  })}
                />
              </Flex >
              <FormErrorMessage mt={0}>
                {errors.informational_package_cost && errors.informational_package_cost.message}
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





// function training() {
//   return (
//     <div>
//       <div id="addtraining" className="overlay">
//         {/*change id to the respective meed name*/}
//         <div className="popup">
//           <div className="pop-div">
//             <a className="close" href="#">
//               &times;
//             </a>
//             <form className="training-form">
//               <p className=" text-color text-size text-design">
//                 Training Time and Duration
//               </p>
//               <div className=" display-style">
//                 <p className="date-select text-color text-size">Date</p>
//                 <input type="date" name="date" className="date-input " />
//               </div>
//               <div className=" display-style">
//                 <p className="text-color text-size">Instruction Hours</p>
//                 <input
//                   type="number"
//                   name="ins-hours"
//                   max="10"
//                   min="1"
//                   className="pretty-input "
//                   placeholder="hours"
//                 />
//               </div>
//               <div className=" display-style ">
//                 <p className=" text-color text-size">Training Length</p>
//                 <input
//                   type="number"
//                   name="training-length"
//                   max="10"
//                   min="1"
//                   className="pretty-input "
//                   placeholder="hours"
//                 />
//               </div>
//               <p className=" text-color text-size text-design">
//                 Trainer(s) Information
//               </p>
//               <div className="display-style ">
//                 <p className="text-color text-size">Trainers Assigned</p>
//                 <input
//                   type="number"
//                   name="tr-assigned"
//                   max="10"
//                   min="1"
//                   className="pretty-input "
//                   placeholder="hours"
//                 />
//               </div>
//               <div className=" display-style ">
//                 <p className="text-color text-size">Trainers Pay Rate</p>
//                 <input
//                   type="text"
//                   name="hours"
//                   className="pretty-input"
//                   placeholder="0.00"
//                 />
//               </div>
//               <div className=" display-style ">
//                 <p className="training-costs text-color text-size">
//                   Training Costs
//                 </p>
//                 <input
//                   type="text"
//                   name="costs"
//                   className=" pretty-input"
//                   placeholder="0.00"
//                 />
//               </div>
//               <button className="button-design" type="submit" value="Submit">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Training;
