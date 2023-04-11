import React, { useState, createContext } from "react";
import Login from "../pages/login";
import User from "../pages/user";

export const UserDetailContext = createContext(null);

function UseContextHook() {
  const [name, setName] = useState("user name");
  return (
    <>
      <UserDetailContext.Provider value={{ name, setName }}>
        <h2 className="hook">UseContextHook</h2>
        <Login />
        <User />
      </UserDetailContext.Provider>
    </>
  );
}

export default UseContextHook;
