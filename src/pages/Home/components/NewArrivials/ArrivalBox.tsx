import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IArrivalBoxProps {
    width: string;
    height: string;
    background: string;
    mainText: string;
    secondaryText: string;
}
function ArrivalBox(props: IArrivalBoxProps) {

    return (
        <Box
            className="newArrivalBox"
            sx={{
                position: "relative",
                width: props.width,
                height: props.height,
                marginRight: "32px",
                overflow: "hidden",
            }}
        >
            <Box
                className="newArrivalImage"
                sx={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${props.background})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            />
            <Box
                className="newArrivalTextShader"
                sx={{
                    height: "88px",
                    width: "100%",
                    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
                    opacity: 0.7,
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <Typography className="mainText" fontSize={22} color="#fff">{props.mainText}</Typography>
                <Typography className="secondaryText" fontSize={16} color="#fff">{props.secondaryText}</Typography>
            </Box>
        </Box>
    )
}

export default ArrivalBox;