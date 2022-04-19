import { Button, Theme } from "@mui/material";

interface ITongtangButtonProps {
    label: string;
}

function TongtangButton(props: ITongtangButtonProps) {
    return (
        <Button
            disableRipple
            disableElevation
            disableFocusRipple
            disableTouchRipple
            variant="outlined"
            sx={{
                width: "152px",
                height: "50px",
                border: "2px solid #FE7328",
                borderRadius: "10px",
                fontWeight: 500,
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