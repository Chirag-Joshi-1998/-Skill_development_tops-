import React from "react";
import { useForm } from "react-hook-form";

const UseFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-bold mb-4">React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format"
              }
            })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-semibold">Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2">Submit</button>
      </form>
    </div>
  );
};

export default UseFormComponent;
