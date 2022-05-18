import { Box, Typography } from "@mui/material";
import { getImageUrl } from "../../../helpers/urlHelper";
import R from "../../../resources/Namespace";

function Tab3Content() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "1920px",
                height: "840px",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 768px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "64px 52px",
                }}>
                    <Typography fontSize={24} fontWeight={500} color="#2E3233" lineHeight={"36px"} marginBottom="20px">
                        {R.strings.cases.culture_derivative.tab3.title}
                    </Typography>
                    <Typography fontSize={16} fontWeight={400} color="#252525" lineHeight={"32px"}>
                        {R.strings.cases.culture_derivative.tab3.content}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "560px",
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Box sx={{
                        height: "100%",
                        width: "384px",
                        backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/1@2x.png")})`,
                        backgroundSize: "contain",
                    }} />
                    <Box sx={{
                        height: "100%",
                        width: "384px",
                        backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/2@2x.png")})`,
                        backgroundSize: "contain",
                    }} />
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                flex: "0 0 1152px"
            }}>
                <Box sx={{
                    height: "560px",
                    width: "384px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/3@2x.png")})`,
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    height: "280px",
                    width: "768px",
                    position: "absolute",
                    top: "560px",
                    left: 0,
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/4@2x.png")})`,
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    height: "280px",
                    width: "768px",
                    position: "absolute",
                    left: "384px",
                    top: 0,
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/5@2x.png")})`,
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "384px",
                    height: "280px",
                    position: "absolute",
                    left: "384px",
                    top: "280px",
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/6@2x.png")})`,
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "384px",
                    height: "560px",
                    position: "absolute",
                    left: "768px",
                    top: "280px",
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/tab3/7@2x.png")})`,
                    backgroundSize: "contain",
                }} />
            </Box>
        </Box>
    );
}

export default Tab3Content;