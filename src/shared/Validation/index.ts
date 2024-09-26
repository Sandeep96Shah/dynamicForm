import * as Yup from "yup";
import { Field } from "../components/Form";

export const buildValidationSchema = (fields: Field[]) => {
  const shape: Record<string, any> = {};
  fields.forEach((field) => {
    if (!field.disabled) {
      switch (field.type) {
        case "text":
          shape[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "email":
          shape[field.name] = Yup.string()
            .email("Invalid email address")
            .required(`${field.label} is required`);
          break;
        case "number":
          shape[field.name] = Yup.number()
            .typeError("Must be a number")
            .required(`${field.label} is required`);
          break;
        case "password":
          shape[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "date":
          shape[field.name] = Yup.date().required(`${field.label} is required`);
          break;
        case "checkbox":
          shape[field.name] = Yup.boolean();
          break;
        case "dropdown":
          shape[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "radio":
          shape[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "range":
          shape[field.name] = Yup.number().required(
            `${field.label} is required`
          );
          break;
        default:
          shape[field.name] = Yup.string(); // Default to string validation
      }
    }
  });
  return Yup.object().shape(shape);
};
