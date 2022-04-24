import { Box, Typography } from "@mui/material";
import R from "../../../resources/Namespace";

interface ISolarTermCardProps {
    index: number;
    reverse: boolean;
}

const ns = R.strings.cases.solar_terms as any;
function SolarTermCard(props: ISolarTermCardProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: props.reverse ? "column-reverse" : "column",
                width: "348px",
                height: "713px",
                flex: "0 0 348px",
                margin: "0 54px",
                position: "relative",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Typography marginBottom="4px" fontSize={24} fontWeight={600} lineHeight="33px" color="#1C1F21">
                    {ns[`term${props.index + 1}`].title}
                </Typography>
                <Typography fontSize={14} fontWeight={400} lineHeight="20px" color="#BEBEBE">
                    {ns[`term${props.index + 1}`].sub_title}
                </Typography>
            </Box>
            <Box sx={{
                width: "348px",
                height: "619px",
                backgroundImage: `url(${ns[`term${props.index + 1}`].url})`,
                marginTop: props.reverse ? 0 : "37px",
                marginBottom: props.reverse ? "37px" : 0,
            }} />
            <Box sx={{
                position: "absolute",
                left: "22px",
                width: "1px",
                height: "30px",
                border: "1px solid #D9D9D9",
                top: props.reverse ? "619px" : "64px",
            }} />
        </Box>
    )
}

export default SolarTermCard;