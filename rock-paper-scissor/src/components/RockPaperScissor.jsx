import React, { useState } from "react";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from "./Rock";
import Result from "./Result";

export default function RockPaperScissor() {
  const [option, setOption] = useState(null);
  const arr = ["rock", "paper", "scissor"];
  const [housePicked, setHousePicked] = useState("");
  function handleOption(option) {
    setOption(option);
    const ind = Math.floor(Math.random() * arr.length);
    setHousePicked(arr[ind]);
  }

  return (
    <div>
      {option ? (
        <Result option={option} housePicked={housePicked} />
      ) : (
        <div>
          <svg
            id="triangle"
            width="313"
            height="278"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#000"
              stroke-width="15"
              fill="none"
              opacity=".2"
              d="M156.5 262 300 8H13z"
            />
          </svg>
          <Paper selectOption={handleOption} />
          <Scissor selectOption={handleOption} />
          <Rock selectOption={handleOption} />
        </div>
      )}
    </div>
  );
}
