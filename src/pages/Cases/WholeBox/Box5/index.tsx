import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import R from "../../../../resources/Namespace";
import TongtangTimeline from "../Timeline";
import { getImageUrl } from "../../../../helpers/urlHelper";

interface IBox5Props {
    closeBox: () => void;
}
function Box5(props: IBox5Props) {
    return (
        <Box
            sx={{
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "#000",
                opacity: 0.8,
            }} />
            <IconButton
                size="large"
                onClick={props.closeBox}
                aria-label="Close"
                disableRipple
                disableFocusRipple
                sx={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    right: "12px",
                    top: "12px",
                    color: "#afafaf",
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    width: "1640px",
                    height: "750px",
                    background: "#fff",
                    zIndex: 1,
                }}
            >
                <TongtangTimeline
                    top="0px"
                    right="0px"
                    paddingLeft="1288px"
                    paddingTop="77px"
                    height="450px"
                    title={R.strings.cases.whole_box.box5.title}
                    items={R.strings.cases.whole_box.box5.items}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 728px",
                    zIndex: 1,
                }}>
                    <Box height="484px" marginBottom="32px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box5/1@2x.png")})`,
                        backgroundSize: "cover",
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Box width="348px" height="234px" marginRight="32px" sx={{
                            backgroundImage: `url(${getImageUrl("/cases/whole_box/box5/2@2x.png")})`,
                            backgroundSize: "cover",
                        }} />
                        <Box width="348px" height="234px" sx={{
                            backgroundImage: `url(${getImageUrl("/cases/whole_box/box5/3@2x.png")})`,
                            backgroundSize: "cover",
                        }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 424px",
                    zIndex: 1,
                }}>
                    <Box height="80px" />
                    <Box height="670px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box5/4@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 424px",
                    zIndex: 1,
                }}>
                    <Box height="516px" />
                    <Box height="234px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box5/5@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Box5;