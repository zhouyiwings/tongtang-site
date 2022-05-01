import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { useMemo, useState } from "react";
import DetailImage from "./DetailImage";
import TongtangIconButton from "../../../../components/IconButton";

interface IDetailViewProps {
    show: boolean;
    section: number;
    hideDetailView: () => void;
    totalImages: number;
}
function DetailView(props: IDetailViewProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const showPrevButton = useMemo(() => {
        return props.totalImages > 1 && currentImageIndex > 1;
    }, [props.totalImages, currentImageIndex]);
    const showNextButton = useMemo(() => {
        return props.totalImages > 1 && currentImageIndex < props.totalImages;
    }, [props.totalImages, currentImageIndex]);

    const hideDetailView = () => {
        setCurrentImageIndex(1);
        props.hideDetailView();
    }

    const arr = useMemo(() => Array.from(Array(props.totalImages)), [props.totalImages]);

    if (!props.show) return null;
    return (
        <Box sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            zIndex: 9999,
        }}>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "#000",
                opacity: 0.8,
            }} />
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "1628px",
                    height: "699px",
                }}>
                    <TongtangIconButton
                        icon={<ArrowBackIosNewIcon />}
                        opacity={showPrevButton ? 1 : 0}
                        marginRight="100px"
                        onClick={() => currentImageIndex > 1 && showPrevButton && setCurrentImageIndex(currentImageIndex - 1)}
                    />
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "1380px",
                            height: "699px",
                        }}
                    >
                        {arr.map((_, index) => {
                            return (
                                <DetailImage totalImages={props.totalImages} currentImageIndex={currentImageIndex} sectionNumber={props.section} imageIndex={index + 1} />
                            );
                        })}
                        
                    </Box>
                    <TongtangIconButton
                        icon={<ArrowForwardIosIcon />}
                        opacity={showNextButton ? 1 : 0}
                        marginLeft="100px"
                        onClick={() => currentImageIndex < props.totalImages && showNextButton && setCurrentImageIndex(currentImageIndex + 1)}
                    />
                </Box>
                <IconButton
                    size="large"
                    onClick={hideDetailView}
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
            </Box>
        </Box>
    )
}

export default DetailView;