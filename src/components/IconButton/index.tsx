import { IconButton } from "@mui/material";

interface ITongtangIconButtonProps {
    icon: any;
    opacity?: number;
    marginLeft?: string;
    marginRight?: string;
    onClick: () => void;
    variant?: "outlined";
    pointerEvents?: string;
}

function TongtangIconButton(props: ITongtangIconButtonProps) {
    return (
        <IconButton
            onClick={props.onClick}
            sx={{
                zIndex:"99",
                width: "48px",
                height: "48px",
                marginLeft: props.marginLeft || "0px",
                marginRight: props.marginRight || "0px",
                backgroundColor: props.variant === "outlined" ? "transparent" : "#b3b3b6",
                color: props.variant === "outlined" ? "#2e3233" : "#8d8f90",
                border: props.variant === "outlined" ? "1px solid #2e3233" : undefined,
                opacity: props.opacity !== undefined ? props.opacity : 1,
                pointerEvents: props.pointerEvents || "auto" as any,
                
                "& svg": {
                    fill: props.variant === "outlined" ? "#2e3233" : "#8d8f90",
                },

                "&:hover": {
                    backgroundColor: "#ff7006",
                    color: "#fff",
                    border: "none",
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