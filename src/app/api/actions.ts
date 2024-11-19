/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";

type Error = {
    name?: string;
    email?: string;
    message?: string
}

type initialState = {
    message?: string;
    errors?: Error;
}

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().trim().min(1, { message: "Please type in a message" }),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = contactFormSchema.safeParse(contactFormData);

  // console.log(validatedContactFormData?.data);

  if (!validatedContactFormData.success) {
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message,
      },
    };
  }

  return {
    success: "Your message was sent successfully!",
  };
}