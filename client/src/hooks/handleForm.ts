import { useState } from "react";

export const handleForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: Event) => {
    setFormData({
      ...formData,
      [(<HTMLButtonElement>e.target)!.name]: (<HTMLInputElement>e.target)!
        .value,
    });
  };

  return { formData, handleInputChange };
};
