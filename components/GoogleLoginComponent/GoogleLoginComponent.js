"use client";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const GoogleLoginComponent = ({ loading, setLoading }) => {
  return (
    <div className=" mx-auto">
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            setLoading(false);
            console.log(credentialResponse);
          }}
          onError={() => {
            setLoading(false);
            console.log("Login Failed");
          }}
          onRequest={() => {
            setLoading(true);
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginComponent;
