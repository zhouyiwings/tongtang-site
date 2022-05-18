import { Box } from "@mui/material";
import Animation1 from "./components/Animation";
import BusinessScope from "./components/BusinessScope";
import NewArrivals from "./components/NewArrivials";
import Clients from "./components/Clients";

import "./Home.scss";
import Footer from "../../components/Footer";
import Advantages from "./components/Advantages";
import Portfolio from "./components/Portfolio";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getImageUrl } from "../../helpers/urlHelper";

function Home() {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        console.log("current location", location);

        return () => {
            console.log("next location" , location);
            console.log("next history location" , history.location);
        }
    }, []);

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
                    <img src={getImageUrl("/home/slogan@2x.png")} />
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    id="slogan2"
                    sx={{
                        position: "relative",
                        height: "340px",
                        width: "1324px",
                        maxWidth: "100%",
                        zIndex: 9999,
                        opacity: 0,
                        bottom: "90px",
                        alignSelf: "center",
                        justifySelf: "center",
                        top: "-200px",
                        "& img": {
                            height: "100%",
                            maxWidth: "100%"
                        }
                    }}>
                    <img src={getImageUrl("/home/slogan2@2x.png")} />
                </Box>
            </Box>
            <BusinessScope />
            <NewArrivals />
            <Advantages />
            <Portfolio />
            <Clients />
            <Footer />
        </Box>
    )
}

export default Home;