import React from "react";
import { Formik } from "formik";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <p className="login-eyebrow">Welcome back</p>
        <h1>Login</h1>
        <p className="login-subtitle">Sign in to continue to your account.</p>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>

              <label className="login-field">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </label>

              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
