"use client";
import GoogleLoginComponent from "@/components/GoogleLoginComponent/GoogleLoginComponent";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [loading, setLoading] = React.useState(false);

  return (
    <React.Fragment>
      {JSON.stringify(loading)}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo Electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Si lo deseas puedes iniciar sesión con
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 mx-auto gap-4">
                <div
                  onClick={() => {
                    setLoading(true);
                  }}
                >
                  <GoogleLoginComponent
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-[#24292F]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff5722"
                      d="M6 6H22V22H6z"
                      transform="rotate(-180 14 14)"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M26 6H42V22H26z"
                      transform="rotate(-180 34 14)"
                    ></path>
                    <path
                      fill="#ffc107"
                      d="M26 26H42V42H26z"
                      transform="rotate(-180 34 34)"
                    ></path>
                    <path
                      fill="#03a9f4"
                      d="M6 26H22V42H6z"
                      transform="rotate(-180 14 34)"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Microsoft
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            No eres miembro?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Comienza tu periodo de prueba ahora.
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
