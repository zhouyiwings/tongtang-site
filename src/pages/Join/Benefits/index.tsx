import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TongtangIconButton from "../../../components/IconButton";
import {useState, useMemo} from "react";
import R from "../../../resources/Namespace";
import { getImageUrl } from "../../../helpers/urlHelper";

const totalImages = 7;
function Benefits() {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const showPrevButton = useMemo(() => {
        return totalImages > 1 && currentImageIndex > 1;
    }, [currentImageIndex]);
    const showNextButton = useMemo(() => {
        return totalImages > 1 && currentImageIndex < totalImages;
    }, [currentImageIndex]);
    const arr = useMemo(() => Array.from(Array(totalImages)), [totalImages]);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "1017px",
            background: "#fff",
            paddingTop: "80px",
        }}>
            <Box sx={{
                backgroundImage: `url(${getImageUrl("/join_us/benefit/title@2x.png")})`,
                backgroundSize: "contain",
                width: "326px",
                height: "105px",
                marginBottom: "28px",
            }} />
            <Box sx={{ width: "764px", marginBottom: "78px"}}>
                <Typography textAlign="center" fontSize={16} fontWeight={400} color="#252525" lineHeight="32px">
                    {R.strings.join_us.benefit}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "1710px",
                height: "566px",
            }}>
                <TongtangIconButton
                    icon={<ArrowBackIosNewIcon />}
                    variant="outlined"
                    opacity={showPrevButton ? 1 : 0}
                    marginRight="67px"
                    onClick={() => currentImageIndex > 1 && showPrevButton && setCurrentImageIndex(currentImageIndex - 1)}
                />
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1488px",
                        height: "699px",
                    }}
                >
                    {arr.map((_, index) => {
                        return (
                            <Box
                                sx={{
                                    position: "absolute",
                                    display: "flex",
                                    width: currentImageIndex !== index ? "656px" : "906px",
                                    height: currentImageIndex !== index ? "430px" : "566px",
                                    transition: "all 0.5s ease-in-out",
                                    left: currentImageIndex > index ? 0 : (currentImageIndex < index ? "832px" : "291px"),
                                    zIndex: currentImageIndex === index ? (totalImages + 1) : (currentImageIndex > index ? 1 : (totalImages - index)),

                                    "& img": {
                                        width: "100%",
                                    },
                                }}
                            >
                                <img src={getImageUrl(`/join_us/benefit/${index+1}.jpg`)} />
                                <Box sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "#fff",
                                    opacity: currentImageIndex !== index ? 0.5 : 0,
                                    transition: "all 0.5s ease-in-out",
                                }} />
                            </Box>
                        );
                    })}
                    
                </Box>
                <TongtangIconButton
                    icon={<ArrowForwardIosIcon />}
                    variant="outlined"
                    opacity={showNextButton ? 1 : 0}
                    marginLeft="67px"
                    onClick={() => currentImageIndex < totalImages && showNextButton && setCurrentImageIndex(currentImageIndex + 1)}
                />
            </Box>
        </Box>
    )
}

export default Benefits;