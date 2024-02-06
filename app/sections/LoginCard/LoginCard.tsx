import React from "react";
import "./LoginCard.scss";
import Image from "next/image";
import Avater from "../../../public/user-1.jpg";
import Vercel from "../../../public/vercel.svg";
import Next from "../../../public/next.svg";
import Nym from "../../../public/nym.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const LoginCard = () => {
  return (
    <div className="LoginCard rounded-xl shadow-sm flex flex-col justify-between bg-blue-200 text-gray-900">
      <div className="m-5 p-5">
        <div className="logo">
          <h1 className="font-extrabold text-5xl text-gray-950">
            <span className="underline">My Notes</span> 📝
          </h1>
        </div>
        <div className="mt-20">
          <p className="text-md">
            My Notes is a specialized tool designed to monitor and manage your
            notes in running on a computer system. Unlike the built-in Notes in
            operating systems like Windows, third-party My Notes software often
            offers additional features and capabilities for enhanced control and
            analysis. Here are some key points about My Notes software
          </p>
          <div className="mt-20 flex items-center space-x-1 rtl:space-x-reverse">
            <div className="">
              <SignedIn>
                {" "}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Image src={Avater} alt="User" className="rounded-full w-12" />
              </SignedOut>
            </div>
            <div className="pl-5">
              <p className="p-0 m-0 font-medium">Anas Yakubu</p>
              <small className="text-gray-800">Web Developer at NYM</small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-5 copyright flex justify-between">
        <small>© 2024 My Notes App</small>
        <div className="flex justify-between">
          <Image
            className="mr-3"
            src={Nym}
            alt="Vercel"
            width={50}
            height={50}
          />
          <Image
            className="mr-3"
            src={Next}
            alt="Vercel"
            width={50}
            height={50}
          />
          <Image src={Vercel} alt="Vercel" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
