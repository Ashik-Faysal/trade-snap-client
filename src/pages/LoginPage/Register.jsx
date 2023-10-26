import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthProvider";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { updateUserProfile, createUser } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data) {
      createUser(data.email, data.password, data.photoURL)
        .then((result) => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Registration Successful");
                reset();
                navigate("/");
              }
            });
        });
      });
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return (
      regex.test(value) ||
      "Password must contain at least 8 characters, one uppercase, one lowercase, and one number."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-rose-100 to-teal-100 flex items-center justify-center">
      <form
        className="w-96 p-6 bg-gradient-to-bl from-rose-100 to-teal-100 shadow-2xl rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 via-blue-500 to-teal-500 text-transparent bg-clip-text text-3xl text-center font-bold mb-4">
          Register Form
        </h2>{" "}
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                className={`w-full p-2 border rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your name"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+\.\S+$/ }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="email"
                className={`w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Enter a valid email address.</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600" htmlFor="password">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true, validate: validatePassword }}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type={field.value ? "text" : "password"}
                  id="password"
                  className={`w-full p-2 border rounded-md pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Your password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3"
                  onClick={() => field.onChange(!field.value)}
                >
                  {field.value ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="photoURL">
            Photo URL
          </label>
          <Controller
            name="photoURL"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="photoURL"
                className={`w-full p-2 border rounded-md ${
                  errors.photoURL ? "border-red-500" : ""
                }`}
                placeholder="Your photo URL"
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover-bg-blue-600"
        >
          Register
        </button>
        <div className="my-4 flex items-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="mx-4 text-gray-500">Or</div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <SocialLogin />
        <small>
          Already Have an Account? <Link to="/login">Login Here</Link>
        </small>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
