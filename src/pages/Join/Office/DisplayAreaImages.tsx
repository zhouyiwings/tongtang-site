import { Box } from "@mui/material";
import R from "../../../resources/Namespace";
import ImageCard from "./ImageCard";

function DisplayAreaImages() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "76px",
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
                    title={`${R.strings.join_us.office.selective}`}
                    url="/join_us/office/selective@2x.png"
                />
                <ImageCard
                    width="424px"
                    height="274px"
                    title={`${R.strings.join_us.office.toy}`}
                    url="/join_us/office/toy@2x.png"
                />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 976px",
                marginLeft: "32px",
            }}>
                <ImageCard
                    width="976px"
                    height="580px"
                    title={`${R.strings.join_us.office.gift_box}`}
                    url="/join_us/office/gift_box@2x.png"
                />
            </Box>
        </Box>
    )
}

export default DisplayAreaImages;