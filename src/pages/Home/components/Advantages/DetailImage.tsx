import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import R from "../../../../resources/Namespace";

interface IDetailImageProps {
    sectionNumber: number;
    imageIndex: number;
    currentImageIndex: number;
}

function DetailImage(props: IDetailImageProps) {
    return (
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                width: props.currentImageIndex !== props.imageIndex ? "970px" : "1224px",
                height: props.currentImageIndex !== props.imageIndex ? "545.63px" : "699px",
                transition: "all 0.5s ease-in-out",
                left: props.currentImageIndex > props.imageIndex ? 0 : (props.currentImageIndex < props.imageIndex ? "380px" : "78px"),
                zIndex: props.currentImageIndex !== props.imageIndex ? 1 : 2,
            }}
        >
            <img src={`/home/advantages/detail_view/detail${props.sectionNumber + 1}-${props.imageIndex}@2x.png`} />
            <Box
                sx={{
                    position: "absolute",
                    height: "120px",
                    width: "100%",
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    opacity: 0.7,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography fontSize={28} color="#fff">
                    {(R.strings.advantages.detail_view as any)[`title${props.sectionNumber + 1}_${props.imageIndex}`]}
                </Typography>
            </Box>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#000",
                opacity: props.currentImageIndex !== props.imageIndex ? 0.4 : 0,
                transition: "all 0.5s ease-in-out",
            }} />
        </Box>
    )
}

export default DetailImage;