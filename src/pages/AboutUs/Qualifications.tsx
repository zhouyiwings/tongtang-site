import { Box, Typography } from "@mui/material";
import { getImageUrl } from "../../helpers/urlHelper";
import R from "../../resources/Namespace";

function Qualifications() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "805px",
            background: "#F7F7F7",
            alignItems: "center",
            paddingTop: "100px",
        }}>
            <Box sx={{
                width: "422px",
                height: "105px",
                backgroundImage: `url(${getImageUrl("/about_us/qualification@2x.png")})`,
                backgroundSize: "contain",
                marginBottom: "70px",
            }} />
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                width: "1792px",
                height: "410px",
            }}>
                <Box sx={{
                    width: "424px",
                    height: "410px",
                    marginRight: "32px",
                    background: "#fff",
                    paddingTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "30px",
                }}>
                    <Box sx={{
                        width: "400px",
                        height: "284px",
                        backgroundImage: `url(${getImageUrl("/about_us/cert1@2x.png")})`,
                        backgroundSize: "contain",
                        marginBottom: "32px",
                    }} />
                    <Typography fontSize={18} fontWeight={500} lineHeight="32px" color="#252525">
                        {R.strings.about_us.cert1}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "424px",
                    height: "410px",
                    marginRight: "32px",
                    background: "#fff",
                    paddingTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "30px",
                }}>
                    <Box sx={{
                        width: "400px",
                        height: "284px",
                        backgroundImage: `url(${getImageUrl("/about_us/cert2@2x.png")})`,
                        backgroundSize: "contain",
                        marginBottom: "32px",
                    }} />
                    <Typography fontSize={18} fontWeight={500} lineHeight="32px" color="#252525">
                        {R.strings.about_us.cert2}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "424px",
                    height: "410px",
                    marginRight: "32px",
                    background: "#fff",
                    paddingTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "30px",
                }}>
                    <Box sx={{
                        width: "400px",
                        height: "284px",
                        backgroundImage: `url(${getImageUrl("/about_us/cert3@2x.png")})`,
                        backgroundSize: "contain",
                        marginBottom: "32px",
                    }} />
                    <Typography fontSize={18} fontWeight={500} lineHeight="32px" color="#252525">
                        {R.strings.about_us.cert3}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "424px",
                    height: "410px",
                    marginRight: "32px",
                    background: "#fff",
                    paddingTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "30px",
                }}>
                    <Box sx={{
                        width: "400px",
                        height: "284px",
                        backgroundImage: `url(${getImageUrl("/about_us/cert4@2x.png")})`,
                        backgroundSize: "contain",
                        marginBottom: "32px",
                    }} />
                    <Typography fontSize={18} fontWeight={500} lineHeight="32px" color="#252525">
                        {R.strings.about_us.cert4}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Qualifications;