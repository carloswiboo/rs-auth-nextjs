"use client";
import AppErrorAlertComponent from "@/components/AppErrorAlertComponent/AppErrorAlertComponent";
import AppInfoAlertComponent from "@/components/AppInfoAlertComponent/AppInfoAlertComponent";
import AppSuccessAlertComponent from "@/components/AppSuccessAlertComponent/AppSuccessAlertComponent";
import AppWarningAlertComponent from "@/components/AppWarningAlertComponent/AppWarningAlertComponent";
import GoogleLoginComponent from "@/components/GoogleLoginComponent/GoogleLoginComponent";
import LoadingScreenComponent from "@/components/LoadingScreenComponent/LoadingScreenComponent";
import Image from "next/image";
import React from "react";

export default function ActivateAccountScreenComponent() {
  const [loading, setLoading] = React.useState(false);

  const [tipoAlerta, setTipoAlerta] = React.useState("info");

  return (
    <React.Fragment>
      {loading == true ? (
        <>
          <LoadingScreenComponent />
        </>
      ) : null}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Cambiar Contraseña
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {tipoAlerta == "error" ? (
              <AppErrorAlertComponent
                title={"Ha ocurrido un error al activar la cuenta"}
                message={
                  "Aquí mostramos el mensaje que necesitamos para que el usuario lo vea"
                }
              />
            ) : null}

            {tipoAlerta == "success" ? (
              <AppSuccessAlertComponent
                title={"Ha ocurrido un mensaje exitoso al activar la cuenta"}
                message={
                  "Aquí mostramos el mensaje que necesitamos para que el usuario lo vea"
                }
              />
            ) : null}

            {tipoAlerta == "warning" ? (
              <AppWarningAlertComponent
                title={"Ha ocurrido un mensaje exitoso al activar la cuenta"}
                message={
                  "Aquí mostramos el mensaje que necesitamos para que el usuario lo vea"
                }
              />
            ) : null}
            {tipoAlerta == "info" ? (
              <AppInfoAlertComponent
                title={"Ha ocurrido un mensaje exitoso al activar la cuenta"}
                message={
                  "Aquí mostramos el mensaje que necesitamos para que el usuario lo vea"
                }
              />
            ) : null}

            <form className="space-y-3" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nueva contraseña
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-1 text-gray-900"
                >
                  Confirmar Contraseña
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cambiar Contraseña
                </button>
              </div>
            </form>
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
