"use client";

// import React from "react";
import React, { useState } from "react";
import "./LoginCardForm.scss";
// import Image from "next/image";
import Link from "next/link";
// import GoogleLogo from "../../../public/google.png";
// import GithubLogo from "../../../public/287725_github_icon.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const LoginCardForm = () => {
  return (
    <div className="LoginCardForm">
      <div className="text-left">
        <div className="">
          <SignedIn>
            <h2 className="text-xl font-semibold">Welcome Back 😁</h2>
          </SignedIn>
          <SignedOut>
            <h2 className="text-xl font-semibold">Get Started</h2>
          </SignedOut>
        </div>
        {/* flex items-center space-x-1 rtl:space-x-reverse
         flex items-center space-x-1 rtl:space-x-reverse */}
        <div className="">
          <SignedIn>
            <Link
              href="/Dashboard"
              className="w-full btn bg-white text-sm text-gray-900 font-medium p-2 flex justify-center mt-3 text-center 
           rounded-lg"
            >
              {/* <Image src={GoogleLogo} alt="Google" className="w-5" /> */}
              <span className="ml-5">Continue</span>
            </Link>
          </SignedIn>

          <SignedOut>
            <Link
              href="/sign-in"
              className="w-full btn bg-white text-sm text-gray-900 font-medium p-2 flex justify-center mt-3 text-center 
           rounded-lg"
            >
              {/* <Image src={GoogleLogo} alt="Google" className="w-5" /> */}
              <span className="ml-5">Login into Your Account</span>
            </Link>
          </SignedOut>
          {/* <button
            className="w-full bg-white text-sm text-gray-900 font-medium flex justify-center p-2 text-center mt-3 
           rounded-lg"
          >
            <Image src={GithubLogo} alt="Google" className="w-5" />
            <span className="ml-5">Continue with GitHub</span>
          </button> */}
        </div>
        {/* <div className="mt-5 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-400">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div> */}
        <div className="mt-10">
          <small className="text-gray-400" style={{ fontSize: "11px" }}>
            By continuing, you agree to {""}
            <Link className="text-white" href="/">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-white" href="/">
              Privacy Policy.
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginCardForm;
