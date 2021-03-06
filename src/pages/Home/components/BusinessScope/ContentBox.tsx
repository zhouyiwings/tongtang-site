import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getImageUrl } from "../../../../helpers/urlHelper";


interface IContentBoxProps {
    icon: string;
    mainText: string;
    secondaryText?: string;
    id: string;
}

function ContentBox(props: IContentBoxProps) {

    return (
        <Box
            id={props.id}
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            className="contentBox"
            sx={{
                justifyContent: "center",
                width: "304px",
                height: "304px",
                position: "relative",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                boxSizing: "border-box",
                borderLeft: "1px solid #EDEDED",
            }}
        >
            <Box
                sx={{
                    width: "80px",
                    height: "80px",
                    marginBottom: "17px",
                }}
            >
                <img style={{width: "100%", height: "100%"}} alt={props.mainText} src={getImageUrl(props.icon)} />
            </Box>
            <Typography fontSize={20} color="#333333">{props.mainText}</Typography>
            {!props.secondaryText ? null : <Typography fontSize={20}>{props.secondaryText}</Typography>}
        </Box>
    )
}

export default ContentBox;