import { Typography } from "@mui/material";
import { Box } from "@mui/system";


interface IContentBoxProps {
    icon: string;
    mainText: string;
    secondaryText?: string;
}

function ContentBox(props: IContentBoxProps) {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            className="contentBox"
            sx={{
                width: "304px",
                height: "304px",
                position: "relative",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                paddingTop: `${props.secondaryText ? "82px" : "62px"}`,
                backgroundColor: "#fff",
                boxSizing: "border-box",
                borderLeft: "1px solid #EDEDED",
                "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 12px 18px -11px rgba(0, 0, 0, 0.32)",
                }
            }}
        >
            <Box
                sx={{
                    width: "80px",
                    height: "80px",
                    marginBottom: "17px",
                }}
            >
                <img style={{width: "100%", height: "100%"}} alt={props.mainText} src={props.icon} />
            </Box>
            <Typography fontSize={20} color="#333333">{props.mainText}</Typography>
            {!props.secondaryText ? null : <Typography fontSize={20}>{props.secondaryText}</Typography>}
        </Box>
    )
}

export default ContentBox;