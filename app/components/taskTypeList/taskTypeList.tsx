import React from "react";
import "./taskTypeList.scss";

interface taskTypeList {
  link: any;
  title: string;
  // tutorialName: string;
  // tutorialDetails: string;
}

const taskTypeList = (props: taskTypeList) => {
  const { link, title } = props;
  return (
    <div
      className="taskTypeList shadow-sm shadow-gray-600 rounded-xl p-3 m-1"
      style={{ backgroundColor: "#acc2ef", color: "#1f2b3e", marginTop: "5%" }}
    >
      <a href={link} className="p-3">
        <div className="flex justify-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="mt-5">
          <p>list of {title} Projects</p>
        </div>
        <div className="mt-3">
          <p className="flex justify-between mt-2">
            <span>Projects</span>
            <span>10</span>
          </p>
          <p className="flex justify-between mt-2">
            <span>Projects</span>
            <span>10</span>
          </p>
          <p className="flex justify-between mt-2">
            <span>Projects</span>
            <span>10</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default taskTypeList;
