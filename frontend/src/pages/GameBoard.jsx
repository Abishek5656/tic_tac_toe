// src/pages/GameBoard.jsx
import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import BoardCell from "../components/game/BoardCell";

const GameBoard = ({ username = "Player X" }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    // Temporary UI board state (will be replaced by Nakama state)
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [turn, setTurn] = useState("X");

    //click handler (later will send move to Nakama)
    const handleCellClick = (row, col) => {
        console.log(`Clicked cell: row ${row}, col ${col}`);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.default",
                px: 2,
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={4}
                    sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        textAlign: "center",
                    }}
                >
                    {/* PLAYER HEADERS */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 3 }}
                    >
                        <Typography variant={isSmall ? "body1" : "h6"} fontWeight={600}>
                            Player X (You)
                        </Typography>

                        <Typography variant={isSmall ? "body1" : "h6"} fontWeight={600}>
                            Player O
                        </Typography>
                    </Stack>

                    {/* TURN INDICATOR */}
                    <Typography
                        variant={isSmall ? "body1" : "h6"}
                        color="primary"
                        sx={{ mb: 3 }}
                        fontWeight={500}
                    >
                        Turn: {turn === "X" ? "Your Turn (X)" : "Opponent Turn (O)"}
                    </Typography>

                    {/* BOARD (3x3 GRID) */}
                    <Box sx={{ my: 2 }}>
                        <Grid container spacing={1}>
                            {board.map((row, rowIndex) =>
                                row.map((cell, colIndex) => (
                                    <Grid item xs={4} key={`${rowIndex}-${colIndex}`}>
                                        <BoardCell
                                            value={cell}
                                            isSmall={isSmall}
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                        />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Box>

                    {/* BUTTONS */}
                    <Stack
                        direction={isSmall ? "column" : "row"}
                        spacing={2}
                        justifyContent="space-between"
                        sx={{ mt: 3 }}
                    >
                        <Button variant="outlined" color="error" fullWidth>
                            Leave Game
                        </Button>

                        <Button variant="contained" color="primary" fullWidth>
                            Restart
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default GameBoard;
