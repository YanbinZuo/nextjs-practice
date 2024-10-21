import React, { useContext, useRef } from "react";
import classes from "./styles/NewsLetterRegistration.module.css";
import NotificationContext from "@/store/NotificationContext";

function NewsLetterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    const enteredEmail = emailInputRef.current.value;
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: data.message,
          status: "success"
        })
      })
      .catch(error => {
        notificationCtx.showNotification({
          title: "Error",
          message: error.message || "something went wrong!",
          status: 'error'
        })
      });
  };
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsLetterRegistration;
