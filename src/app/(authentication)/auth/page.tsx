"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "@/components/shared/Input";
import { toast } from "react-hot-toast";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Auth = () => {
  const [variant, setVariant] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "login") {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        setIsLoading(false);
        if (callback?.error) {
          toast.error(callback.error);
        } else if (callback?.ok) {
          toast.success("Logged in successfully!");
        }
      });
    } else {
      axios
        .post("/api/register", data)
        .then(() => {
          toast.success("Registered!");
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-100 relative w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover">
      <div className=" flex justify-center h-full px-4 py-20">
        <div className="backdrop-blur bg-white/40 lg:w-2/5 lg:max-w-md self-center w-full px-16 py-10 mt-2 border-2 rounded-md shadow-md">
          <h2 className="mb-8 text-4xl font-semibold text-black">
            {variant === "login" ? "Sign in" : "Register"}
          </h2>
          <form className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                id="name"
                label="Username"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            )}
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </form>
          <button
            onClick={handleSubmit(onSubmit)}
            className="hover:bg-teal-700 w-full py-3 mt-10 text-white transition bg-teal-600 rounded-md"
          >
            {variant === "login" ? "Login" : "Sign up"}
          </button>
          <div className="md:flex-col flex flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => signIn("google")}
              className="group hover:border-teal-600 focus:bg-teal-50 active:bg-teal-100 w-full h-12 px-6 transition duration-300 border-2 border-white rounded-full"
            >
              <div className="relative flex items-center justify-center gap-4">
                <div className="md:absolute md:left-0 bg-white rounded-full p-0.5">
                  <FcGoogle size={32} />
                </div>
                <span className="md:inline-block w-max group-hover:text-teal-600 sm:text-base hidden text-sm font-semibold tracking-wide text-gray-700 transition duration-300">
                  Continue with Google
                </span>
              </div>
            </button>

            <button
              onClick={() => signIn("github")}
              className="group hover:border-teal-600 focus:bg-teal-50 active:bg-teal-100 w-full h-12 px-6 text-xs transition duration-300 border-2 border-white rounded-full"
            >
              <div className="relative flex items-center justify-center gap-4">
                <div className="md:absolute md:left-0  bg-black rounded-full p-0.5 ">
                  <FaGithub size={32} />
                </div>
                <span className="md:inline-block w-max group-hover:text-teal-600 sm:text-base hidden text-sm font-semibold tracking-wide text-gray-700 transition duration-300">
                  Continue with GitHub
                </span>
              </div>
            </button>
          </div>
          <p className="text-neutral-600 mt-12">
            {variant === "login"
              ? "First time using StayHub?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="hover:underline ml-1 text-teal-600 cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
