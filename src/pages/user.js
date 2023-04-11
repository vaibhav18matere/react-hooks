import React, { useContext } from "react";
import { UserDetailContext } from "../hooks/UseContextHook";

function User() {
  const { name } = useContext(UserDetailContext);

  return (
    <>
      <h5>heyy! hello, {name}</h5>
    </>
  );
}

export default User;
