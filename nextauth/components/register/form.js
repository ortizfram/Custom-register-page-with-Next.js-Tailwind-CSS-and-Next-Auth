import React, { useState } from "react";

("use client");

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("components/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        // redirect
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Register!");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-[400px]">
      <label htmlFor="username" className="text-gray-700 font-bold">
        Email:
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        type="email"
        className="my-2 border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="password" className="text-gray-700 font-bold">
        Password:
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        type="password"
        className="my-4 border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <button
        type="submit"
        className="w-full mt-4 font-semibold bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
