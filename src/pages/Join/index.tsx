import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Office from "./Office";
import Recruiting from "./Recruiting";

function Join() {

    return (
        <Box display="flex" flexDirection="column" sx={{
            width: "100%",
            flex: "1 1 auto",
        }}>
            <Banner />
            <Office />
            <Benefits />
            <Recruiting />
            <Footer />
        </Box>
    )
}

export default Join;