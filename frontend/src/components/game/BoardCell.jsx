import React from "react";
import { Box } from "@mui/material";

const BoardCell = ({ value, onClick, isSmall }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: 2,
        border: "2px solid",
        borderColor: "grey.400",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: isSmall ? "2rem" : "2.5rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          bgcolor: "grey.100",
        },
      }}
    >
      {value}
    </Box>
  );
};

export default BoardCell;
