import { Box, Typography } from "@mui/material";
import { useState } from "react";
import R from "../../../resources/Namespace";
import DisplayAreaImages from "./DisplayAreaImages";
import ImageCard from "./ImageCard";
import MeetingAreaImages from "./MeetingAreaImages";
import OfficeAreaImages from "./OfficeAreaImages";

function Office() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "993px",
            background: "#fff",
            paddingTop: "143px",
            paddingLeft: "73px",
            paddingRight: "64",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "60px",
            }}>
                <Box sx={{
                    backgroundImage: "url(/join_us/office/title@2x.png)",
                    backgroundSize: "contain",
                    width: "339px",
                    height: "105px",
                }} />
                <Typography fontSize={16} fontWeight={400} lineHeight="32px" color="#252525" marginLeft="567px">
                    {R.strings.join_us.office.intro}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "30px",
                    flex: "0 0 339px",
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "38px",
                            marginBottom: "22px",
                            cursor: "pointer",
                            marginLeft: "auto",
                            marginRight: currentIndex === 0 ? "85px" : undefined,
                        }}
                        onMouseEnter={() => setCurrentIndex(0)}>
                        <Box sx={{
                            width: "52px",
                            height: "3px",
                            background: "#FF7005",
                            marginRight: "32px",
                            opacity: currentIndex == 0 ? 1 : 0,
                        }} />
                        <Typography fontSize={26} fontWeight={500} color={currentIndex === 0 ? "#FF7005" : "#333333"} lineHeight="38px">
                            {R.strings.join_us.office.office_area}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "38px",
                            marginBottom: "22px",
                            cursor: "pointer",
                            marginLeft: "auto",
                            marginRight: currentIndex === 0 ? "85px" : undefined,
                        }}
                        onMouseEnter={() => setCurrentIndex(1)}>
                        <Box sx={{
                            width: "52px",
                            height: "3px",
                            background: "#FF7005",
                            marginRight: "32px",
                            opacity: currentIndex == 1 ? 1 : 0,
                        }} />
                        <Typography fontSize={26} fontWeight={500} color={currentIndex === 1 ? "#FF7005" : "#333333"} lineHeight="38px">
                            {R.strings.join_us.office.meeting_area}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "38px",
                            cursor: "pointer",
                            marginLeft: "auto",
                            marginRight: currentIndex === 0 ? "85px" : undefined,
                        }}
                        onMouseEnter={() => setCurrentIndex(2)}>
                        <Box sx={{
                            width: "52px",
                            height: "3px",
                            background: "#FF7005",
                            marginRight: "32px",
                            opacity: currentIndex == 2 ? 1 : 0,
                        }} />
                        <Typography fontSize={26} fontWeight={500} color={currentIndex === 2 ? "#FF7005" : "#333333"} lineHeight="38px">
                            {R.strings.join_us.office.display_area}
                        </Typography>
                    </Box>
                    {currentIndex === 0 &&
                        <Box sx={{
                            marginTop: "118px",
                        }}>
                            <ImageCard
                                width="424px"
                                height="274px"
                                url="/join_us/office/office-04@2x.png"
                                title={`${R.strings.join_us.office.office_area}-04`}
                            />
                        </Box>
                    }
                </Box>
                <Box sx={{
                    display: "flex",
                    flex: "1 1 auto",
                    marginLeft: "32px",
                }}>
                    {currentIndex === 0 && <OfficeAreaImages />}
                    {currentIndex === 1 && <MeetingAreaImages />}
                    {currentIndex === 2 && <DisplayAreaImages />}
                </Box>
            </Box>
        </Box>
    )
}

export default Office;