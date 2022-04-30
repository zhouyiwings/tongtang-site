import { Box, Typography } from "@mui/material";
import R from "../../resources/Namespace";

function CompanyIntro() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "216px",
            alignItems: "center",
            width: "100%",
            height: "956px",
        }}>
            <Box sx={{
                height: "649px",
                width: "500px",
                backgroundImage: "url(/about_us/intro@2x.png)",
                backgroundSize: "contain",
                marginRight: "99px",
            }} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                flex: "1",
                paddingRight: "216px",
            }}>
                <Box sx={{
                    width: "320px",
                    height: "105px",
                    backgroundImage: "url(/about_us/intro_title@2x.png)",
                    backgroundSize: "contain",
                    marginBottom: "28px",
                }} />
                <Typography marginBottom="36px" fontSize={16} fontWeight={400} color="#252525" lineHeight="32px">
                    {R.strings.about_us.company_intro_p1}
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#252525" lineHeight="32px">
                    {R.strings.about_us.company_intro_p2}
                </Typography>
            </Box>
        </Box>
    );
}

export default CompanyIntro;