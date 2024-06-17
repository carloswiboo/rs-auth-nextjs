"use client";
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
const AppInfoAlertComponent = ({ title, message }) => {
  debugger;
  return (
    <>
      <div className="rounded-md bg-blue-50 p-4 mb-3">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">{title}</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                <li>{message}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppInfoAlertComponent;
