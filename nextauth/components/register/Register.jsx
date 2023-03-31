import React from "react";
import { RegisterForm } from "./form";
import Link from "next/link";

const Register = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-indigo-100">
      <div className="shadow-xl  px-10 py-12 bg-white rounded-xl">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Create your Account
        </h1>
        <RegisterForm />
        <p className="text-center">
          Have an account?{" "}
          <Link className="text-indigo-500 hover:underline" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
