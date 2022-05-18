import { Box, Typography } from "@mui/material";
import { getImageUrl } from "../../helpers/urlHelper";
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
            <img style={{width: "100%", height: "100%"}} src={getImageUrl("/about_us/us@2x.png")} />
            <Box sx={{
                position: "absolute",
                top: "31.33971292%",
                left: "11.25%"
            }}>
                <Typography fontSize={60} fontWeight="bold" lineHeight="89px" color="#fff">
                    {R.strings.about_us.us}
                </Typography>
                <Typography fontSize={32} fontWeight={400} lineHeight="47px" color="#fff">
                    {R.strings.about_us.us_english}
                </Typography>
            </Box>
            <Box sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "214px",
                zIndex: 2,
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    flex: "0 0 50%",
                    backgroundColor: "#F7F7F7",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        height: "80px",
                        width: "80px",
                        backgroundImage: `url(${getImageUrl("/about_us/vision@2x.png")})`,
                        backgroundSize: "contain",
                        marginRight: "60px",
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Typography marginBottom="20px" fontSize={30} fontWeight="bold" lineHeight="45px" color="#333">
                            {R.strings.about_us.vision_title}
                        </Typography>
                        <Typography fontSize={20} fontWeight={400} lineHeight="29px" color="#333">
                            {R.strings.about_us.vision_description}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    flex: "0 0 50%",
                    backgroundColor: "#FF7005",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        height: "80px",
                        width: "80px",
                        backgroundImage: `url(${getImageUrl("/about_us/values@2x.png")})`,
                        backgroundSize: "contain",
                        marginRight: "60px",
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    <Typography marginBottom="20px" fontSize={30} fontWeight="bold" lineHeight="45px" color="#fff">
                        {R.strings.about_us.values_title}
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} lineHeight="29px" color="#fff">
                        {R.strings.about_us.values_description}
                    </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner;