// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Stack,
//   Paper,
//   useTheme,
//   useMediaQuery
// } from "@mui/material";

// const Home = () => {
//   const [username, setUsername] = useState("");
//   const [roomCode, setRoomCode] = useState("");

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handlePlayOnline = () => {
//     console.log("Play Online clicked");
//   };

//   const handleCreateRoom = () => {
//     console.log("Create Room clicked");
//   };

//   const handleJoinRoom = () => {
//     console.log("Joining room:", roomCode);
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: { xs: 2, sm: 4 }, // Responsive padding
//       }}
//     >
//       <Paper
//         elevation={4}
//         sx={{
//           width: "100%",
//           p: { xs: 3, sm: 4 }, // Responsive padding
//           borderRadius: 3,
//           textAlign: "center",
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant={isMobile ? "h5" : "h4"} // responsive title
//           fontWeight="bold"
//           gutterBottom
//         >
//           TIC TAC TOE 🎮
//         </Typography>

//         <Stack spacing={3} mt={3}>
//           {/* Username */}
//           <Box>
//             <Typography
//               sx={{
//                 textAlign: "left",
//                 mb: 1,
//                 fontWeight: 500,
//                 fontSize: { xs: "0.9rem", sm: "1rem" },
//               }}
//             >
//               Enter Username
//             </Typography>

//             <TextField
//               fullWidth
//               size="small"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your name"
//               autoComplete="off"
//             />
//           </Box>

//           {/* Play Online */}
//           <Button
//             fullWidth
//             variant="contained"
//             size={isMobile ? "medium" : "large"} // button adapts in mobile
//             onClick={handlePlayOnline}
//           >
//             Play Online
//           </Button>

//           {/* Create Room */}
//           <Button
//             fullWidth
//             variant="outlined"
//             size={isMobile ? "medium" : "large"}
//             onClick={handleCreateRoom}
//           >
//             Create Private Room
//           </Button>

//           {/* Join Room */}
//           <Box>
//             <Typography
//               sx={{
//                 textAlign: "left",
//                 mb: 1,
//                 fontWeight: 500,
//                 fontSize: { xs: "0.9rem", sm: "1rem" },
//               }}
//             >
//               Join Room
//             </Typography>

//             <Stack
//               direction={{ xs: "column", sm: "row" }} // stacks vertically on mobile
//               spacing={1}
//             >
//               <TextField
//                 size="small"
//                 placeholder="Room Code"
//                 value={roomCode}
//                 onChange={(e) => setRoomCode(e.target.value)}
//                 sx={{ flex: 1 }}
//                 autoComplete="off"
//               />

//               <Button
//                 variant="contained"
//                 onClick={handleJoinRoom}
//                 disabled={!roomCode}
//                 fullWidth={isMobile} // Join button full width on mobile
//               >
//                 Join
//               </Button>
//             </Stack>
//           </Box>
//         </Stack>

//         {/* Footer */}
//         <Typography
//           sx={{
//             mt: 5,
//             fontSize: { xs: "0.7rem", sm: "0.8rem" },
//             color: "text.secondary",
//           }}
//         >
//           Powered by Nakama
//         </Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Paper,
  useTheme,
  useMediaQuery
} from "@mui/material";



const Home = ({ setUsername }) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [roomCode, setRoomCode] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePlayOnline = () => {
    console.log("Play Online clicked");
    setUsername(name);
    navigate("/matchmaking");
  };

  const handleCreateRoom = () => {
    console.log("Create Room clicked");
  };

  const handleJoinRoom = () => {
    console.log("Joining room:", roomCode);
  };

  return (
    <Container
      maxWidth="sm"
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
        >
          TIC TAC TOE 🎮
        </Typography>

        <Stack spacing={3} mt={3}>
          {/* Username */}
          <Box>
            <Typography
              sx={{
                textAlign: "left",
                mb: 1,
                fontWeight: 500,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Enter Username
            </Typography>

            <TextField
              fullWidth
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="off"
              inputProps={{
                autoComplete: "new-password", 
              }}
            />
          </Box>

          {/* Play Online */}
          <Button
            fullWidth
            variant="contained"
            size={isMobile ? "medium" : "large"}
            onClick={handlePlayOnline}
          >
            Play Online
          </Button>

          {/* Create Room */}
          <Button
            fullWidth
            variant="outlined"
            size={isMobile ? "medium" : "large"}
            onClick={handleCreateRoom}
          >
            Create Private Room
          </Button>

          {/* Join Room */}
          <Box>
            <Typography
              sx={{
                textAlign: "left",
                mb: 1,
                fontWeight: 500,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Join Room
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
            >
              <TextField
                size="small"
                placeholder="Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                autoComplete="off"
                inputProps={{
                  autoComplete: "one-time-code", // avoids browser suggestions
                }}
                sx={{ flex: 1 }}
              />

              <Button
                variant="contained"
                onClick={handleJoinRoom}
                disabled={!roomCode}
                fullWidth={isMobile}
              >
                Join
              </Button>
            </Stack>
          </Box>
        </Stack>

        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: "0.7rem", sm: "0.8rem" },
            color: "text.secondary",
          }}
        >
          Powered by Nakama
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;

