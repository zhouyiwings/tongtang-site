import { Box } from "@mui/material";
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