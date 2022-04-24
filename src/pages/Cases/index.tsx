import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import ClientWall from "./ClientWall";
import Section1 from "./Section1";

function Cases() {

    return (
        <Box display="flex" flexDirection="column" sx={{
            width: "100%",
            flex: "1 1 auto",
        }}>
            <Section1 />
            <ClientWall />
            <Footer />
        </Box>
    )
}

export default Cases;