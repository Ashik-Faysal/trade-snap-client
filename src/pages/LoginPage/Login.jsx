import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login Successful");
      reset();
      navigate("/");
    } catch (error) {
      setError("password", {
        type: "serverError",
        message: "Login failed. Please check your credentials.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-rose-100 to-teal-100 flex items-center justify-center">
      <form
        className="w-96 p-6 bg-gradient-to-bl from-rose-100 to-teal-100 shadow-2xl rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <div className="mb-2">
          <label className="block text-xl text-gray-600" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="email"
                className={`w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email"
                required
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="block text-xl text-gray-600" htmlFor="password">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`w-full p-2 border rounded-md pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <div className="flex justify-end my-2">
            <a to="#" className="hover:underline cursor-pointer text-blue-500">
              Forgot Password
            </a>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>{" "}
        <div className="my-4 flex items-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="mx-4 text-gray-500">Or</div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <SocialLogin />
        <small>
          New Here?{" "}
          <Link className="text-blue-500 hover:underline" to="/register">
            Register Here
          </Link>
        </small>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
