import React, { useState, useEffect } from "react";
import axios from "axios";

function UseMemoHook() {
  const [data, setData] = useState("");
  const [text, setText] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;

      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("value is computed");
    return longestName;
  };

  return (
    <>
      <h2 className="hook">UseMemoHook</h2>
      <p>{findLongestName(data)}</p>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        click
      </button>
      {text && (
        <span>text toggle to check memoised value renders again or not</span>
      )}
    </>
  );
}

export default UseMemoHook;
