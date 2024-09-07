"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <Input
          type="text"
          placeholder="Your Name"
          className=" focus:outline-none focus:ring-2  px-2 py-2 dark:bg-[#020617] rounded-md text-sm  w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <Input
          type="email"
          placeholder="Your email address"
          className=" focus:outline-none focus:ring-2   px-2 py-2 rounded-md text-sm  w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          rows={10}
          className="focus:outline-none focus:ring-2  px-2 mt-4 py-2 rounded-md text-sm  w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <Button
        className="w-full px-2 py-2 mt-4 rounded-md font-bold "
        type="submit"
      >
        Submit{" "}
      </Button>
    </form>
  );
};
