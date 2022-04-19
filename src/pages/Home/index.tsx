import { Box } from "@mui/material";
import Animation1 from "./components/Animation";
import BusinessScope from "./components/BusinessScope";
import NewArrivals from "./components/NewArrivials";
import Clients from "./components/Clients";

import "./Home.scss";

function Home() {

    return (
        <Box className="main">
            <Box 
                id="section1"
                display="flex" flexDirection="column"
                sx={{
                    width: "100%",
                    flex: "0 0 auto",
                    height: "100vh",
                    scrollSnapAlign: "start",
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
            <BusinessScope />
            <NewArrivals />
            <Clients />
        </Box>
    )
}

export default Home;