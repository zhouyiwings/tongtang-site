import { IconButton } from "@mui/material";

interface ITongtangIconButtonProps {
    icon: any;
    opacity?: number;
    marginLeft?: string;
    marginRight?: string;
    onClick: () => void;
}

function TongtangIconButton(props: ITongtangIconButtonProps) {
    return (
        <IconButton
            onClick={props.onClick}
            sx={{
                width: "48px",
                height: "48px",
                marginLeft: props.marginLeft || "0px",
                marginRight: props.marginRight || "0px",
                backgroundColor: "#b3b3b6",
                color: "#8d8f90",
                opacity: props.opacity !== undefined ? props.opacity : 1,
                
                "& svg": {
                    fill: "#8d8f90",
                },

                "&:hover": {
                    backgroundColor: "#ff7006",
                    color: "#fff",
                    "& svg": {
                        fill: "#fff",
                    },
                },
            }}
        >
            {props.icon}
        </IconButton>
    )
}

export default TongtangIconButton;