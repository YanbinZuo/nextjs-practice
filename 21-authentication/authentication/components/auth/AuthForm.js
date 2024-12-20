import React, { useRef, useState } from "react";
import { signIn } from "next-auth/client";
import classes from "./AuthForm.module.css";
import { useRouter } from "next/router";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

function AuthForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // optional: validate the inputs

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(result);
      if(!result.error) {
        router.replace('/profile')
      }

    } else {
      try {
        const res = await createUser(email, password);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input id="password" type="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
