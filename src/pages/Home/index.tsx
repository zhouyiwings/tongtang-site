import { Box } from "@mui/material";
import { useEffect } from "react";
import Animation1 from "./components/Animation1";

import "./Home.scss";

function Home() {

    return (
        <Box 
            id="section1"
            display="flex" flexDirection="column" sx={{
            width: "100%",
            flex: "0 0 auto",
        }}>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                id="slogan"
                sx={{
                    marginTop: "250px",
                    height: "170px",
                    width: "100%",
                    zIndex: 9999,
                    "& img": {
                        height: "100%",
                        maxWidth: "960px"
                    }
                }}>
                <img src="./home/slogan@2x.png" />
            </Box>
            <Animation1 />
        </Box>
    )
}

export default Home;