import { Box, Typography } from "@mui/material";
import { getImageUrl } from "../../../helpers/urlHelper";
import R from "../../../resources/Namespace";

function CreativeDesign() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row-reverse",
                position: "relative",
                width: "100vw",
                height: "1000px",
                paddingTop: "80px",
                paddingBottom: "128px",
            }}
        >
            <Box sx={{
                width: "64.1145833%",
                height: "645px",
                position: "absolute",
                background: "#f5f5f5",
                left: 0,
                bottom: "60px", 
            }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "0 0 1248px",
                    zIndex: 1,
                }}
            >
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${getImageUrl("/cases/creative_design/main@2x.png")})`,
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "0 0 456px",
                    marginRight: "76px",
                    paddingTop: "40px",
                    zIndex: 1,
                }}
            >
                <Box sx={{
                    width: "289px",
                    height: "105px",
                    backgroundImage: `url(${getImageUrl("/cases/creative_design/title@2x.png")})`,
                    backgroundSize: "contain",
                    marginBottom: "135px",
                    marginLeft: "auto",
                }} />
                <Typography textAlign={"right"} fontSize={24} fontWeight={500} lineHeight="36px" color="#2E3233" marginBottom="20px">
                    {R.strings.cases.creative_design.title}
                </Typography>
                <Typography textAlign={"right"} fontSize={16} fontWeight={400} lineHeight="32px" color="#252525" marginBottom="107px">
                    {R.strings.cases.creative_design.content}
                </Typography>
                <Box sx={{
                    width: "184px",
                    height: "275px",
                    backgroundImage: `url(${getImageUrl("/cases/creative_design/sub@2x.png")})`,
                    backgroundSize: "contain",
                    marginLeft: "auto",
                }} />
            </Box>
        </Box>
    )
}

export default CreativeDesign;