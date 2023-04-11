import React, { useState, useEffect, useMemo } from "react";
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

  const getLongestName = useMemo(() => {
    findLongestName(data);
  }, [data]);

  //      to check memoised value change, input something else; for example counter, text or any other state value
  //   const getLongestName = useMemo(() => {
  //     findLongestName(data);
  //   }, [text]);

  return (
    <>
      <h2 className="hook">UseMemoHook</h2>
      {/* <p>{findLongestName(data)}</p> */}
      <p>{getLongestName}</p>
      {/* now after clicking the console value is not printing because we are memoising the longestName and it will only change when dependency i.e. [data] is changed*/}

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
