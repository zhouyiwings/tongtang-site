import { Box, Typography } from "@mui/material";
import R from "../../../resources/Namespace";

function Tab2Content() {
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
                    height: "560px",
                    backgroundImage: "url(/cases/culture_derivative/tab2/1@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "280px",
                }}>
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/2@2x.png)",
                        backgroundSize: "contain",
                    }} />
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/3@2x.png)",
                        backgroundSize: "contain",
                    }} />
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 384px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    backgroundImage: "url(/cases/culture_derivative/tab2/4@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    backgroundImage: "url(/cases/culture_derivative/tab2/5@2x.png)",
                    backgroundSize: "contain",
                }} />
                <Box sx={{
                    width: "100%",
                    height: "280px",
                    backgroundImage: "url(/cases/culture_derivative/tab2/6@2x.png)",
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 768px"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "280px",
                    width: "100%",
                }}>
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/7@2x.png)",
                        backgroundSize: "contain",
                    }} />
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/9@2x.png)",
                        backgroundSize: "contain",
                    }} />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "280px",
                    width: "100%",
                    padding: "80px 52px",
                }}>
                    <Typography fontSize={24} fontWeight={500} color="#2E3233" lineHeight={"36px"} marginBottom="20px">
                        {R.strings.cases.culture_derivative.tab2.title}
                    </Typography>
                    <Typography fontSize={16} fontWeight={400} color="#252525" lineHeight={"32px"}>
                        {R.strings.cases.culture_derivative.tab2.content}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "280px",
                    width: "100%",
                }}>
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/8@2x.png)",
                        backgroundSize: "contain",
                    }} />
                    <Box sx={{
                        width: "384px",
                        height: "100%",
                        backgroundImage: "url(/cases/culture_derivative/tab2/10@2x.png)",
                        backgroundSize: "contain",
                    }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Tab2Content;