import { Box, Typography } from "@mui/material";
import R from "../../resources/Namespace";

function Banner() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
            position: "relative",
        }}>
            <img style={{width: "100%", height: "100%"}} src="/join_us/banner@2x.png" />
            <Box sx={{
                position: "absolute",
                top: "46.6507177%",
                left: "11.25%"
            }}>
                <Typography fontSize={60} fontWeight="bold" lineHeight="89px" color="#333">
                    {R.strings.join_us.join}
                </Typography>
                <Typography fontSize={32} fontWeight={400} lineHeight="47px" color="#333">
                    {R.strings.join_us.join_english}
                </Typography>
            </Box>
        </Box>
    );
}

export default Banner;