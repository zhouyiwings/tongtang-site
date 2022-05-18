import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import R from "../../../../resources/Namespace";
import TongtangTimeline from "../Timeline";
import { getImageUrl } from "../../../../helpers/urlHelper";

interface IBox2Props {
    closeBox: () => void;
}
function Box2(props: IBox2Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
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
                    zIndex: 1,
                    background: "#fff",
                }}
            >
                <TongtangTimeline
                    top="0px"
                    left="0px"
                    paddingLeft="76px"
                    marginTop="342px"
                    height="450px"
                    title={R.strings.cases.whole_box.box2.title}
                    items={R.strings.cases.whole_box.box2.items}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 380px",
                }} />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "32px",
                    flex: "1 1 348px",
                    zIndex: 1,
                }}>
                    <Box height="232px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box2/1@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="486px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box2/2@2x.png")})`,
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
                    <Box height="114px" />
                    <Box height="636px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box2/3@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "75px",
                    flex: "1 1 348px",
                    zIndex: 1,
                }}>
                    <Box height="419px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box2/4@2x.png")})`,
                        backgroundSize: "cover",
                        marginBottom: "32px",
                    }}/>
                    <Box height="298px" sx={{
                        backgroundImage: `url(${getImageUrl("/cases/whole_box/box2/5@2x.png")})`,
                        backgroundSize: "cover",
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Box2;