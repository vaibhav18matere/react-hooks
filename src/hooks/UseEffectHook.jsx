import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHook() {
  const [data, setData] = useState("");

  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data[0].body);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h2 className="hook">3. useEffect Hook</h2>
      <p>{data}</p>
    </>
  );
}

export default UseEffectHook;
