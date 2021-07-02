import React, { useState } from "react";

type InitialState = {
    title: string,
    description: string,
    status: boolean
}

export const handleForm = (initialState: InitialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(<HTMLButtonElement>e.target)!.name]: (<HTMLInputElement>e.target)!
        .value,
    });
  };

  return { formData, handleInputChange };
};
