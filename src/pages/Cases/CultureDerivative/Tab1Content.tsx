import { Box, Typography } from "@mui/material";
import R from "../../../resources/Namespace";

function Tab1Content() {
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
                flex: "0 0 412px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "560px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/1@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "100%",
                    height: "281px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/2@2x.png)",
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 532px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/3@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "32px 52px",
                }}>
                    <Typography fontSize={24} fontWeight={500} color="#2E3233" lineHeight={"36px"} marginBottom="20px">
                        {R.strings.cases.culture_derivative.tab1.title}
                    </Typography>
                    <Typography fontSize={16} fontWeight={400} color="#252525" lineHeight={"32px"}>
                        {R.strings.cases.culture_derivative.tab1.content}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/4@2x.png)",
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 412px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "840px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/5@2x.png)",
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 564px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "360px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/6@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "100%",
                    height: "481px",
                    backgroundImage: "url(/cases/culture_derivative/tab1/7@2x.png)",
                    backgroundSize: "contain",
                }} />
            </Box>
        </Box>
    )
}

export default Tab1Content;