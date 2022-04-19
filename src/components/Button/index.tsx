import { Button, Theme } from "@mui/material";

interface ITongtangButtonProps {
    label: string;
    width?: string;
    height?: string;
    opacity?: number;
    id?: string;
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
            sx={{
                width: props.width || "152px",
                height: props.height || "50px",
                border: "2px solid #FE7328",
                borderRadius: "10px",
                fontWeight: 500,
                opacity: props.opacity !== undefined ? props.opacity : 1,
                color: (theme: Theme) => theme.palette.primary.light,

                "&:hover": {
                    border: "2px solid #FE7328",
                    backgroundColor: "#FE7328",
                    color: "#fff",
                }
        }}>{props.label}</Button>
    )
}

export default TongtangButton;