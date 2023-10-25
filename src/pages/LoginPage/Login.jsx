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
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-96 md:w-1/3 p-6 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="email">
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
          <label className="block text-gray-600" htmlFor="password">
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
        </div>
        <div className="grid md:grid-cols-2 justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <SocialLogin />
        </div>
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
