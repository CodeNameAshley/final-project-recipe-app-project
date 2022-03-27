/* eslint-disable import/prefer-default-export */
import { useState } from "react";

export const useForm = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);

  const inputHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return [formData, inputHandler, resetForm];
};
