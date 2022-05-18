import { Box } from "@mui/system";


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
                backgroundImage: `url(${props.background})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}
        >

        </Box>
    )
}

export default TitleBox;