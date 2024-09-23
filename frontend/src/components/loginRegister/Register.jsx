import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Register = () => {
  return (
    <div className="absolute w-full mt-20 ">
      <div className="flex flex-col items-center justify-center p-4 mx-auto">
        <div className="w-96">
          <h1 className="text-3xl jost">Create Account</h1>
          <p className="mt-5">Name</p>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="p-3 py-1 border border-gray-500 rounded-md w-96"
          />
          <p className="mt-5">Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 py-1 border border-gray-500 rounded-md w-96"
          />
          <p className="mt-5">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 py-1 border border-gray-500 rounded-md w-96"
          />
          <p className="mt-5">Role</p>
          <div className="flex gap-4 mt-1">
            <label htmlFor="admin">Admin</label>
            <input type="radio" id="admin" name="role" value="admin" />

            <label htmlFor="user">User</label>
            <input type="radio" id="user" name="role" value="user" />
          </div>
          <p className="mt-2 text-sm text-gray-500 w-96">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <Button className="mt-5 w-96">Create Account</Button>
        </div>
        <div className="relative flex items-center justify-center my-4 w-96">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative px-4 text-gray-500 bg-white">
            Already have an account ?{" "}
            <Link to="/login">
              <span className="font-semibold text-gray-500">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
