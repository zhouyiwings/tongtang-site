import { Button, Theme } from "@mui/material";

interface ITongtangButtonProps {
    label: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    opacity?: number;
    id?: string;
    onClick?: () => void;
    filledBeDefault?: boolean;
}

function TongtangButton(props: ITongtangButtonProps) {
    return (
        <Button
            id={props.id}
            disableRipple
            disableElevation
            disableFocusRipple
            disableTouchRipple
            variant="outlined"
            onClick={props.onClick}
            sx={{
                width: props.width || "152px",
                height: props.height || "50px",
                border: "2px solid #FE7328",
                borderRadius: props. borderRadius || "10px",
                fontWeight: 600,
                opacity: props.opacity !== undefined ? props.opacity : 1,
                color: (theme: Theme) => props.filledBeDefault ? "#fff" : theme.palette.primary.light,
                backgroundColor: props.filledBeDefault ? "#FE7328" : undefined,

                "&:hover": {
                    border: "2px solid #FE7328",
                    backgroundColor: "#FE7328",
                    color: "#fff",
                }
        }}>{props.label}</Button>
    )
}

export default TongtangButton;