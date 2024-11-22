"use client";
import { useFormStatus } from "react-dom";

function FormSubmit() {
  const status = useFormStatus();

  console.log("Form status: ", status)
  if(status.pending) {
    return <>Creating post...</>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}

export default FormSubmit;
