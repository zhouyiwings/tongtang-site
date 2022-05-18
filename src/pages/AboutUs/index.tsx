import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import CompanyIntro from "./CompanyIntro";
import Location from "./Location";
import Qualifications from "./Qualifications";

function AboutUs() {

    return (
        <Box display="flex" flexDirection="column" sx={{
            width: "100%",
            flex: "1 1 auto",
            alignItems: "center",
        }}>
            <Banner />
            <CompanyIntro />
            <Qualifications />
            <Location />
            <Footer />
        </Box>
    )
}

export default AboutUs;