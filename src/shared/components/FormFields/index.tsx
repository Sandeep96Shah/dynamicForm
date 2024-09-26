import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Input, Checkbox, Radio } from 'antd';
import { Field } from "../Form";
import styles from "./formFields.module.scss";

interface FormFieldProps {
  field: Field;
  errors: any
}

const FormFields: FC<FormFieldProps> = ({ field, errors }) => {
    const errorMessage = errors[field?.name]?.message;
  switch (field?.type) {
    case "text":
    case "number":
    case "email":
    case "password":
    case "date":
    case "time":
    case "url":
    case "tel":
    case "color":
    case "range":
      return (
        <div className={styles.inputFieldContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor={field.name}>{field.label}</label>
          <Controller
            name={field.name}
            defaultValue=""
            render={({ field: fieldProps }) => (
              <Input
                type={field.type}
                {...fieldProps}
              />
            )}
          />
        </div>
        {errorMessage && <p className={styles.errorContainer}>{errorMessage}</p>}
        </div>
      );
    case "checkbox":
      return (
        <div className={styles.inputFieldContainer}>
       
        <div className={styles.fieldContainer}>
          <label htmlFor={field.name}>
            <Controller
              name={field.name}
              defaultValue={false}
              render={({ field: fieldProps }) => (
                <Checkbox
                checked={fieldProps?.value}
                  {...fieldProps}
                />
              )}
            />
            {field.label}
          </label>
        </div>
        {errorMessage && <p className={styles.errorContainer}>{errorMessage}</p>}
        </div>
      );
    case "radio":
      return (
        <div className={styles.inputFieldContainer}>
        <div className={styles.radioFieldContainer}>
          <label>{field.label}</label>
          {field?.options?.map((option) => (
            <div key={option} className={styles.radioInput}>
              <Controller
                name={field.name}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <>
                    <Radio
                      value={option}
                      checked={value === option}
                      onChange={onChange}
                    />
                    <label htmlFor={option}>{option}</label>
                  </>
                )}
              />
            </div>
          ))}
        </div>
        {errorMessage && <p className={styles.errorContainer}>{errorMessage}</p>}
        </div>
      );
    case "dropdown":
      return (
        <div className={styles.inputFieldContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor={field.name}>{field.label}</label>
          <Controller
            name={field.name}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <select id={field.name} value={value} onChange={onChange} className={styles.selectInput}>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        {errorMessage && <p className={styles.errorContainer}>{errorMessage}</p>}
        </div>
      );
    default:
      return null;
  }
};

export default FormFields;
