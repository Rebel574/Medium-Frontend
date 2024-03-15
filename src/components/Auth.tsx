import { ChangeEvent, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { SigninInput, SignupInput } from "@rohit_0x07/medium";
import {BACKEND_URL} from "../config"
import axios from "axios";

function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate=useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    password: "",
    email: "",
  });
  const [postSignInput, setPostSignInput] = useState<SigninInput>({
    email: "",
    password: "",
  });

  const handleSignInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof SignupInput
  ) => {
    setPostSignInput((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof SignupInput
  ) => {
    setPostInput((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

  async function sendRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, {
        ...(type === "signin" ? postSignInput : postInput)
      });
      const jwt = response.data;
      localStorage.setItem("token", jwt.token);
      navigate("/blog");
    } catch (error) {
      alert("Inputs Are Valids");
    }
  }
  

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="text-center">
        <div className="text-3xl font-extrabold mb-4">
          {type === "signin" ? "Welcome to Medium" : "Create an Account"}
        </div>
        <div className="text-slate-400 mb-4">
          {type === "signin"
            ? "Don't Have an Account? "
            : "Already have an account?"}
          <Link
            className="pl-2 underline"
            to={type === "signin" ? "/" : "/signin"}
          >
            {type === "signin" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
      <div className="w-full max-w-xs">
        {type === "signin" ? (
          ""
        ) : (
          <LabeledInput
            label="Name"
            placeholder="Rohit Nagtilak"
            value={postInput.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
        )}
        {type === "signin" ? (
          <LabeledInput
            label="Email"
            placeholder="example@example.com"
            value={postSignInput.email}
            onChange={(e) => handleSignInputChange(e, "email")}
          />
        ) : (
          <LabeledInput
            label="Email"
            placeholder="example@example.com"
            value={postInput.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        )}

        {type === "signin" ? (
          <LabeledInput
            label="Password"
            placeholder="********"
            type="password"
            value={postSignInput.password}
            onChange={(e) => handleSignInputChange(e, "password")}
          />
        ) : (
          <LabeledInput
            label="Password"
            placeholder="********"
            type="password"
            value={postInput.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        )}
        <button
          onClick={sendRequest}
          type="button"
          className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signin" ? "Log In" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

interface LabeledInputType {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabeledInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: LabeledInputType) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
