import React from "react";
import LoginCard from "@/app/sections/LoginCard/LoginCard";
import "./page.scss";
import LoginCardForm from "@/app/sections/LoginCardForm/LoginCardForm";

const Login = () => {
  return (
    <div className="Login bg-gray-950">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
        <div className="p-5 LoginCardDiv">
          <LoginCard />
        </div>
        <div className="flex justify-center items-center h-screen LoginCardForm">
          <LoginCardForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
