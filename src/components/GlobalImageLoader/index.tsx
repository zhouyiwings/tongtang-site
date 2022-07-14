import { Box, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../helpers/urlHelper";
import { loadedImageForScrollingAnimation, loadedImageForStaticAnimation } from "../../redux/reducer/app/actions";
import { IApplicationState } from "../../redux/store";
import {
    scrollingAnimationFrameCount,
    staticAnimationFrameCount,
    getImagesNameForStaticAnimation,
    staticAnimationImages,
    scrollingAnimationImages,
    totalImagesForAnimation,
    getImagesNameForScrollingAnimation
} from "./images";

interface IGlobalImageLoaderProps {
    onLoadedAllImages: () => void;
}
function GlobalImageLoader(props: IGlobalImageLoaderProps) {
    const dispatch = useDispatch();

    const loadedImagesCountForStaticAnimation = useSelector((state: IApplicationState) => {
        return Object.values(state.app.loadingStatusOfImagesForStaticAnimation).filter((loaded) => !!loaded).length;
    });
    const loadedImagesCountForScrollingAnimation = useSelector((state: IApplicationState) => {
        return Object.values(state.app.loadingStatusOfImagesForScrollingAnimation).filter((loaded) => !!loaded).length;
    });

    useEffect(() => {
        for (let i = 1; i <= staticAnimationFrameCount; i++) {
            const img = new Image();
            const src = getImagesNameForStaticAnimation(i);
            img.src = src;
            img.onload = () => {
                dispatch(loadedImageForStaticAnimation(src));
            }
            staticAnimationImages.push(img);
        }
    }, []);

    useEffect(() => {
        for (let i = 1; i <= scrollingAnimationFrameCount; i++) {
            const img = new Image();
            const src = getImagesNameForScrollingAnimation(i);
            img.src = src;
            img.onload = () => {
                dispatch(loadedImageForScrollingAnimation(src));
            }
            scrollingAnimationImages.push(img);
        }
    }, []);

    useEffect(() => {
        if (loadedImagesCountForStaticAnimation + loadedImagesCountForScrollingAnimation === totalImagesForAnimation) {
            props.onLoadedAllImages();
        }
    }, [loadedImagesCountForStaticAnimation, loadedImagesCountForScrollingAnimation])


    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "432px",
                height: "195px",
                position: "relative",
            }}>
                <Box sx={{
                    width: "182px",
                    height: "58px",
                    marginBottom: "97px",
                    "& img": {
                        height: "100%",
                        width: "100%",
                    }
                }}>
                    <img src={getImageUrl("/logo@2x.png")} />
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "4px",
                    borderRadius: "4px",
                    background: "#f5f5f5",
                    marginBottom: "16px",
                }} />
                <Box sx={{
                    position: "absolute",
                    bottom: "36px",
                    left: 0,
                    zIndex: 10,
                    width: `${((loadedImagesCountForStaticAnimation + loadedImagesCountForScrollingAnimation) / totalImagesForAnimation * 100).toFixed(2)}%`,
                    height: "4px",
                    borderRadius: "4px",
                    background: "#FF4713",
                }} />
                <Typography fontSize={14} color="#333333" lineHeight={`20px`} fontWeight="bold">
                    {((loadedImagesCountForStaticAnimation + loadedImagesCountForScrollingAnimation) / totalImagesForAnimation * 100).toFixed(2)}%
                </Typography>
            </Box>
        </Box>
    )
}

export default GlobalImageLoader;