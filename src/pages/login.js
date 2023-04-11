import React, { useContext } from "react";
import { UserDetailContext } from "../hooks/UseContextHook";

function Login() {
  const { setName } = useContext(UserDetailContext);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}

export default Login;
