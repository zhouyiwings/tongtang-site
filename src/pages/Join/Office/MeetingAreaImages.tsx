import { Box } from "@mui/material";
import R from "../../../resources/Namespace";
import ImageCard from "./ImageCard";

function MeetingAreaImages() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "76px",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 1336px",
            }}>
                <ImageCard
                    width="1336px"
                    height="580px"
                    title={`${R.strings.join_us.office.meeting_area}`}
                    url="/join_us/office/meeting@2x.png"
                />
            </Box>
        </Box>
    )
}

export default MeetingAreaImages;