import { Box } from "@mui/system";
import { getImageUrl } from "../../../../helpers/urlHelper";


interface ITitleBoxProps {
    background: string;
    id: string;
}

function TitleBox(props: ITitleBoxProps) {

    return (
        <Box
            id={props.id}
            sx={{
                width: "272px",
                height: "304px",
                backgroundImage: `url(${getImageUrl(props.background)})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}
        >

        </Box>
    )
}

export default TitleBox;