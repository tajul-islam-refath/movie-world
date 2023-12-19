import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../api/modules/user.api";

const Registration = () => {
  const navigate = useNavigate();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signinForm = useFormik({
    initialValues: {
      password: "",
      username: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "username minimum 8 characters")
        .required("username is required"),
      password: Yup.string()
        .min(8, "password minimum 8 characters")
        .required("password is required"),
      email: Yup.string()
        .email("enter valid email")
        .required("email is required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);

      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);

      if (response) {
        signinForm.resetForm();
        toast.success("Sign Up success");
        navigate("/login");
      }

      if (err) {
        toast.error("Registration failed!");
        setErrorMessage(err.message);
      }
    },
  });

  return (
    <section className="w-full h-[100vh] relative">
      <div className="login-blur"></div>
      <div className="w-[30%] h-auto  text-white border rounded-lg border-slate-400 py-8 px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2">
        <form
          onSubmit={signinForm.handleSubmit}
          className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="username"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
            name="username"
            value={signinForm.values.username}
            onChange={signinForm.handleChange}
          />
          {signinForm.errors.username && (
            <p className="text-red-600">{signinForm.errors.username}</p>
          )}
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
            name="email"
            value={signinForm.values.email}
            onChange={signinForm.handleChange}
          />
          {signinForm.errors.email && (
            <p className="text-red-600">{signinForm.errors.email}</p>
          )}
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
            name="password"
            value={signinForm.values.password}
            onChange={signinForm.handleChange}
          />
          {signinForm.errors.password && (
            <p className="text-red-600">{signinForm.errors.password}</p>
          )}
          <button
            disabled={isLoginRequest}
            className="block w-full bg-blue-500 text-white py-1 rounded-full font-semibold">
            Registration
          </button>
        </form>
        <Link to="/login" className="block my-4 text-red-400">
          Already have an account?
        </Link>
      </div>
    </section>
  );
};

export default Registration;
