import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import ClientWall from "./ClientWall";
import ContactUs from "./ContactUs";
import CreativeDesign from "./CreativeDesign";
import CultureDerivative from "./CultureDerivative";
import Reserve from "./Reserve";
import Section1 from "./Section1";
import SolarTerms from "./SolarTerms";
import WholeBox from "./WholeBox";

function Cases() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#whole_box_section") {
            document.querySelector("#whole_box_section")?.scrollIntoView({
                behavior: "smooth",
            });
        } else if (location.hash === "#client_wall") {
            document.querySelector("#client_wall")?.scrollIntoView({
                behavior: "smooth",
            });
        } 
    }, []);

    return (
        <Box display="flex" flexDirection="column" sx={{
            width: "100%",
            flex: "1 1 auto",
        }}>
            <Section1 />
            <WholeBox />
            <Reserve />
            <CultureDerivative />
            <CreativeDesign />
            <SolarTerms />
            <ClientWall />
            <ContactUs />
            <Footer />
        </Box>
    )
}

export default Cases;