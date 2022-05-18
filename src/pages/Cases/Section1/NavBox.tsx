import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import { getImageUrl } from "../../../helpers/urlHelper";

interface INavBoxProps {
    currentIndex: number;
    index: number;
    icon: string;
    iconHovered: string;
    title: string;
    subTitle:  string;
    onMouseOver: (index: number) => void;
}

function NavBox(props: INavBoxProps) {

    const onMouseOver = useCallback(() => {
        props.onMouseOver(props.index);
    }, []);
    const onMouseLeave = useCallback(() => {
    }, []);
    return (
        <Box
            className={`navBox ${props.currentIndex === props.index ? "selected" : ""}`}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                height: "240px",
                width: "240px",
                padding: "54px 40px",
                background: "#fff",
                boxShadow: "0px 29px 40px -20px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
            }}
        >
            <Box
                sx={{
                    height: "50px",
                    width: "50px",
                    backgroundImage: props.currentIndex === props.index ? `url(${getImageUrl(props.iconHovered)})` : `url(${getImageUrl(props.icon)})`,
                    backgroundSize: "contain",
                    marginBottom: "14px",
                }}
            />
            <Typography color="#333333" fontSize={22} fontWeight={500}
                sx={{
                    lineHeight: "33px",
                    marginBottom: "9px",
                }}
            >
                {props.title}
            </Typography>
            <Typography color="#999999" fontSize={14} fontWeight={400}
                sx={{
                    lineHeight: "20px",
                }}
            >
                {props.subTitle}
            </Typography>
        </Box>
    )
}

export default NavBox;