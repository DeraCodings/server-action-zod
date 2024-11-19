"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "../api/actions";

const initialState = {
  success: "",
  errors: {
    name: "",
    email: "",
    message: "",
  },
};

function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState);
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={formAction}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          {state.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          {state.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            cols={30}
            rows={10}
          ></textarea>
          {state.errors?.message && (
            <p className="text-red-500">{state.errors.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
            <SubmitButton />
        </div>
      {state?.success && <p className="text-green-600">{state.success}</p>}
      </form>
    </div>
  );
}

export default ContactForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}
