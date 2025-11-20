import React from "react";

const GameBoard = () => {
  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#fafafa",
      }}
    >
      {/* Header */}
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Player X (You) vs Player O
      </h2>

      {/* Turn Indicator */}
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "17px",
          background: "#eaeaea",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        Turn: Your Turn (X)
      </div>

      {/* Game Board UI (dummy) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {/* 9 static boxes */}
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              style={{
                height: "100px",
                fontSize: "28px",
                fontWeight: "bold",
                background: "#fff",
                border: "2px solid #444",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Dummy symbols to show UI look */}
              {i === 0 ? "X" : i === 1 ? "O" : ""}
            </div>
          ))}
      </div>

      {/* Bottom Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            padding: "10px 15px",
            background: "#f44336",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Leave Game
        </button>

        <button
          style={{
            padding: "10px 15px",
            background: "#2196f3",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
