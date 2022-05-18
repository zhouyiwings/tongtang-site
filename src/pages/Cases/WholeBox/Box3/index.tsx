import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import R from "../../../../resources/Namespace";
import TongtangTimeline from "../Timeline";
import { getImageUrl } from "../../../../helpers/urlHelper";

interface IBox3Props {
    closeBox: () => void;
}
function Box3(props: IBox3Props) {
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
                    left="0px"
                    paddingLeft="76px"
                    paddingTop="77px"
                    height="450px"
                    title={R.strings.cases.whole_box.box3.title}
                    items={R.strings.cases.whole_box.box3.items}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 424px",
                    zIndex: 1,
                }}>
                    <Box height="450px" />
                    <Box height="300px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/1@2x.png")})`,
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
                    <Box height="240px" />
                    <Box height="510px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/2@2x.png")})`,
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
                    <Box height="418px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/3@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="300px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/4@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 348px",
                    zIndex: 1,
                }}>
                    <Box height="240px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/5@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="293px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box3/6@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Box3;