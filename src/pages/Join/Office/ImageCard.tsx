import { Box, Typography } from "@mui/material";
import { getImageUrl } from "../../../helpers/urlHelper";

interface IImageCardProps {
    width: string;
    height: string;
    url: string;
    title: string;
    marginBottom?: string;
}
function ImageCard(props: IImageCardProps) {

    return (
        <Box
            sx={{
                position: "relative",
                width: `${props.width}`,
                height: `${props.height}`,
                backgroundImage: `url(${getImageUrl(props.url)})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginBottom: props.marginBottom,
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "66px",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                opacity: 0.7,
            }}>
                <Typography fontSize={22} fontWeight={500} lineHeight="33px" color="#fff">
                    {props.title}
                </Typography>
            </Box>
        </Box>
    )
}

export default ImageCard;