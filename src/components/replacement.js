import "../style/replacement.css";
import { ReplacementCost } from "../services";
import { FormControl, useToast, FormErrorMessage, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const Replacement = () => {
  const toast = useToast();
  const {errors, register, handleSubmit} = useForm()

  const onSubmit = async (values) => {
    try {
       await ReplacementCost(values);
      // console.log(replacement_cost);
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
      <div>
        <div id="addreplacement" className="overlay">
          <div className="popup">
            <div className="pop-div">
              <h2 />
              <a className="close" href="#">
                &times;
              </a>
              <form className="replacement-form" onSubmit={handleSubmit(onSubmit)}>
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
          {/* <FormControl
            isInvalid={errors?.number_of_interviews}
            pb={errors?.number_of_interviews ? 0 : 5}
            mb={2}
          >
            <Input
              type="text"
              id="number_of_interviews"
              name="number_of_interviews"
              backgroundColor="white"
              placeholder="advertising"
              {...register("number_of_interviews", {
                required: "This field is required",
              })}
            />
            <FormErrorMessage mt={0}>
              {errors?.number_of_interviews && errors?.number_of_interviews.message}
            </FormErrorMessage>
          </FormControl>
                <p className=" text-design ">Advertising Detalis</p>
                <div className=" display-style ">
                  <p className="text-color text-size">Advertising fees/termination</p>
                  
                  <input id="advertising_fees_per_termination" type="number" name="advertising_fees_per_termination" className="input-design" placeholder="0.00" required />
                </div>
                <div className=" display-style">
                  <p className="text-color text-size">Job vacancy communication time</p>
                  <input id="job_availability_communication_time" type="number" name="hours" max="10" min="1" className="input-design " placeholder="hours" required />
                </div>

                <p className=" text-design ">Interviewing Detalis</p>
                <div className=" display-style">
                  <p className="text-color text-size">Interview time</p>
                  <input id="interview_time" type="number" name="hours" max="10" min="1" className="input-design " placeholder="hours" required />
                </div>
                <div className=" display-style ">
                  <p className="text-color text-size">Interviews amount</p>
                  <input id="number_of_interviews" type="text" name="hours" className="input-design" placeholder="" required />
                </div>
                <div className=" display-style ">
                  <p className="text-color text-size">Tests given</p>
                  <input id="number_of_test_given" type="number" name="hours" className="input-design" placeholder="" required />
                </div>

                <p className=" text-design ">Costs</p>
                <div className=" display-style ">
                  <p className="text-color text-size">Costs of materials/person</p>
                  <input id="cost_of_materials_per_person" type="text" name="hours" className="input-design" placeholder="0.00" required />
                </div>
                <div className=" display-style ">
                  <p className="text-color text-size">Costs of scoring/person</p>
                  <input id="cost_of_scoring_per_person" type="text" name="hours" className="input-design" placeholder="0.00" required />
                </div>

                <p className=" text-design ">Integration process</p>
                <div className=" display-style">
                  <p className="text-color text-size">Pre-employment admin functions</p>
                  <input id="preemployeement_admin_fun_time" type="number" name="hours" max="10" min="1" className="input-design " placeholder="hours" required />
                </div>
                <div className=" display-style">
                  <p className="text-color text-size">Acquiring and disseminating</p>
                  <input id="acquiring_and_disseminating_time" type="number" name="hours" max="10" min="1" className="input-design " placeholder="hours" required />
                </div>
                <div className=" display-style">
                  <p className="date-select text-color text-size">Start date</p>
                  <input id="start_date" type="date" name="date" className="date-input " required />
                </div>
                <div className=" display-style">
                  <p className="date-select text-color text-size">End date</p>
                  <input id="end_date" type="date" name="date" className="date-input " required />
                </div> */}


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


export default Replacement;
