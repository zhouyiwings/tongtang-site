import { Box } from "@mui/material";
import R from "../../../resources/Namespace";
import ImageCard from "./ImageCard";

function OfficeAreaImages() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 424px",
            }}>
                <ImageCard
                    width="424px"
                    height="274px"
                    marginBottom="32px"
                    title={`${R.strings.join_us.office.office_area}-01`}
                    url="/join_us/office/office-01@2x.png"
                />
                <ImageCard
                    width="424px"
                    height="274px"
                    title={`${R.strings.join_us.office.office_area}-03`}
                    url="/join_us/office/office-03@2x.png"
                />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 880px",
                marginLeft: "32px",
            }}>
                <ImageCard
                    width="880px"
                    height="580px"
                    title={`${R.strings.join_us.office.office_area}-02`}
                    url="/join_us/office/office-02@2x.png"
                />
            </Box>
        </Box>
    )
}

export default OfficeAreaImages;