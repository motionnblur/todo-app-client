"use client";
import React, { useRef, useState } from "react";

const loginUrl: string = "http://localhost:8080/user/login";
const signUp: string = "http://localhost:8080/user/signup";

export default function page() {
  const [loginStr, setLoginStr] = useState<String>("Login");
  const [typePassword, setTypePassword] = useState<String>("password");
  const userNameRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);

  const getPasswState = (): string => {
    if (typePassword === "password") return "text";
    return "password";
  };

  const loginFunc = (): void => {
    const userForm: ILoginForm = {
      name: userNameRef!.current?.value!,
      password: userPasswordRef!.current?.value!,
    };
    fetch(loginUrl, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    }).then((res) => {
      if (res.status == 200) {
        alert("ok");
      }
    });
  };
  const signUpFunc = (): void => {
    const userForm: ILoginForm = {
      name: userNameRef!.current?.value!,
      password: userPasswordRef!.current?.value!,
    };
    fetch(signUp, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    }).then((res) => {
      if (res.status == 200) {
        alert("ok");
      }
    });
  };

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-52 h-80 bg-slate-300 rounded-xl mb-14 flex flex-col p-5">
          <div className="w-full h-12 flex items-center justify-center text-black text-xl">
            {loginStr}
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <input
              type="text"
              className="w-full h-10 rounded-md text-stone-900 p-2"
              placeholder=" Username"
              ref={userNameRef}
            />
            <input
              type={`${typePassword}`}
              className="w-full h-10 rounded-md text-stone-900 p-2"
              placeholder=" Password"
              ref={userPasswordRef}
            />
            <div className="w-full h-6 flex flex-row">
              <input
                type="checkbox"
                className="w-1/6 h-4 rounded-md cursor-pointer"
                onMouseUp={() => {
                  setTypePassword(getPasswState);
                }}
              />
              <div className="text-black text-xs ml-1">Show password</div>
            </div>
          </div>
          <div className="w-full h-32 flex justify-center items-center flex-col gap-1">
            <div
              className="w-full h-9 bg-cyan-500 rounded-xl flex items-center justify-center text-sl cursor-pointer"
              onMouseUp={() => {
                loginStr === "Login" ? loginFunc() : signUpFunc();
                userNameRef.current!.value! = "";
                userPasswordRef.current!.value! = "";
              }}
            >
              {loginStr}
            </div>
            <div className="text-black text-xs flex flex-row gap-1">
              {loginStr === "Login" ? "Forgot" : ""}
              <div className="text-sky-500 text-xs font-bold cursor-pointer">
                {loginStr === "Login" ? "password" : ""}
              </div>
              {loginStr === "Login" ? "?" : ""}
            </div>
            <div
              className="text-sky-500 text-xs font-bold cursor-pointer"
              onMouseUp={() => {
                loginStr === "Login"
                  ? setLoginStr("Sign up")
                  : setLoginStr("Login");

                userNameRef.current!.value! = "";
                userPasswordRef.current!.value! = "";
              }}
            >
              {loginStr === "Login" ? "Sign up" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
