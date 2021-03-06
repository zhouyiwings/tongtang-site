import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import TongtangTimeline from "../Timeline";
import R from "../../../../resources/Namespace";
import { getImageUrl } from "../../../../helpers/urlHelper";

interface IBox4Props {
    closeBox: () => void;
}
function Box4(props: IBox4Props) {
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
                    right: "18px",
                    top: "6px",
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
                    left="0px"
                    bottom="0px"
                    marginTop="-83px"
                    paddingLeft="76px"
                    height="348px"
                    title={R.strings.cases.whole_box.box4.title}
                    items={R.strings.cases.whole_box.box4.items}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 424px",
                    zIndex: 1,
                }}>
                    <Box height="282px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/1@2x.png")})`,
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
                    <Box height="282px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/2@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="282px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/3@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 348px",
                    zIndex: 1,
                }}>
                    <Box height="282px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/4@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="282px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/5@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 348px",
                    zIndex: 1,
                }}>
                    <Box height="307px" />
                    <Box height="443px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box4/6@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Box4;