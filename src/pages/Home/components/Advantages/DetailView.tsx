import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { useMemo, useState } from "react";
import DetailImage from "./DetailImage";

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

    const arr = useMemo(() => Array.from(Array(props.totalImages)), [props.totalImages]);

    if (!props.show) return null;
    return (
        <Box sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            zIndex: 99,
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
                    {showPrevButton && (
                        <IconButton
                            size="large"
                            onClick={() => currentImageIndex > 1 && setCurrentImageIndex(currentImageIndex - 1)}
                            aria-label="Prev"
                            disableRipple
                            disableFocusRipple
                            sx={{
                                color: "#fff",
                                width: "48px",
                                height: "48px",
                                marginRight: "100px",
                            }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    )}
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
                                <DetailImage currentImageIndex={currentImageIndex} sectionNumber={props.section} imageIndex={index + 1} />
                            );
                        })}
                        
                    </Box>
                    {showNextButton &&(
                        <IconButton
                            size="large"
                            onClick={() => currentImageIndex < props.totalImages && setCurrentImageIndex(currentImageIndex + 1)}
                            aria-label="Prev"
                            disableRipple
                            disableFocusRipple
                            sx={{
                                color: "#fff",
                                width: "48px",
                                height: "48px",
                                marginLeft: "100px",
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    )}
                </Box>
                <IconButton
                    size="large"
                    onClick={props.hideDetailView}
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