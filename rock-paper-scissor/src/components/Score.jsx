import React from "react";
import RockPaperScissor from "./RockPaperScissor";

export default function Score() {
  return (
    <section>
      <div
        style={{
          border: "2px solid white",
          height: "150px",
          width: "600px",
          borderRadius: "15px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </span>
        <span>
          <span id="scoreCard">
            <p id="score">SCORE</p>
            <p style={{ fontSize: "50px" }}>12</p>
          </span>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RockPaperScissor />
      </div>
    </section>
  );
}
