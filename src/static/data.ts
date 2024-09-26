import { Field } from "../shared/components/Form";

export const fieldData: Field[] = [
    { name: 'name', label: 'Name', type: 'text', disabled: false },
    { name: 'age', label: 'Age', type: 'number', disabled: false },
    { name: 'email', label: 'Email', type: 'email', disabled: false },
    { name: 'password', label: 'Password', type: 'password', disabled: false },
    { name: 'birthdate', label: 'Birthdate', type: 'date', disabled: false },
    { name: 'gender', label: 'Gender', type: 'radio', disabled: false, options: ['Male', 'Female'] },
    { name: 'car', label: 'Car', type: 'dropdown', disabled: false, options: ['BMW', 'Audi', 'Tesla'] },
    { name: 'subscribe', label: 'Subscribe to newsletter', type: 'checkbox', disabled: true },
    { name: 'color', label: 'Favorite Color', type: 'color', disabled: false },
    { name: 'satisfaction', label: 'Satisfaction Level', type: 'range', disabled: false },
  ];