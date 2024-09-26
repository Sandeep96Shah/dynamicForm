import React, { FC } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildValidationSchema } from "../../Validation";
import FormFields from "../FormFields";
import styles from './form.module.scss';

export interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "time"
    | "url"
    | "tel"
    | "checkbox"
    | "radio"
    | "color"
    | "range"
    | "dropdown";
  disabled: boolean;
  options?: string[];
}

interface FormValues {
  [key: string]: any;
}

interface FormProps {
  fields: Field[];
}

const Form: FC<FormProps> = ({ fields }) => {
  const validationSchema = buildValidationSchema(fields);
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
    reset
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    console.log({ formValues });
    reset();
  };
  return (
    <div className={styles.formContainer}>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBody}>
        {fields
          ?.filter((field) => !field.disabled)
          ?.map((field) => (
            <FormFields key={field.name} field={field} errors={errors} />
          ))}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
    </div>
  );
};

export default Form;
