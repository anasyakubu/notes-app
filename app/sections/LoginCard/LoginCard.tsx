import React from "react";
import "./LoginCard.scss";
import Image from "next/image";
import TSOneLogo from "../../../public/tm-white-t.png";
import Avater from "../../../public/img_avatar3.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const LoginCard = () => {
  return (
    <div className="LoginCard rounded-xl shadow-sm flex flex-col justify-between bg-gray-900">
      <div className="m-5 p-5">
        <div className="logo">
          <Image src={TSOneLogo} className="img" alt="TASK MANAGER" />
        </div>
        <div className="mt-20">
          <p className="text-sm">
            A Task Manager software is a specialized tool designed to monitor
            and manage processes and applications running on a computer system.
            Unlike the built-in Task Manager in operating systems like Windows,
            third-party Task Manager software often offers additional features
            and capabilities for enhanced control and analysis. Here are some
            key points about Task Manager software
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
              <p className="p-0 m-0">Anas Yakubu</p>
              <small className="text-gray-400">Web Developer at NYM</small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-5 copyright">
        <small>© 2023 Task Managers</small>
      </div>
    </div>
  );
};

export default LoginCard;
