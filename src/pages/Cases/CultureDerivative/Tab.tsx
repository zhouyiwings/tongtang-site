import { Box, Typography } from "@mui/material";
import { useCallback, useMemo } from "react";
import R from "../../../resources/Namespace";

interface ITabProps {
    index: number;
    currentIndex: number;
    onHover: (index: number) => void;
}

const ns = R.strings.cases.culture_derivative as any;
function Tab(props: ITabProps) {
    const isHovered = useMemo(() => props.index === props.currentIndex, [props.index, props.currentIndex]);
    const onMouseOver = useCallback(() => {
        props.onHover(props.index);
    }, [props.index]);

    return (
        <Box
            className={isHovered ? "hovered" : ""}
            onMouseOver={onMouseOver}
            sx={{
                position: "relative",
                width: "33.33333%",
                height: "108px",
                backgroundColor: isHovered ? "#FF7005" : "#f5f5f5",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&.hovered": {
                    "&::after": {
                        content: "' '",
                        position: "absolute",
                        top: "100%",
                        width: "0",
                        height: "0",
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: "10px solid #FF7005",
                        left: "50%",
                        marginLeft: "-5px",
                    },
                },
            }}
        >
            <Box sx={{
                width: "46px",
                height: "46px",
                backgroundImage: isHovered ? `url(${ns[`tab${props.index + 1}`].icon_hovered})` : `url(${ns[`tab${props.index + 1}`].icon})`,
                backgroundSize: "contain",
            }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "63px",
                }}
            >
                <Typography color={isHovered ? "#fff" : "#333"} fontSize={20} fontWeight={500} lineHeight="29px">{ns[`tab${props.index + 1}`].title}</Typography>
                <Typography color={isHovered ? "#fff" : "#333"} fontSize={14} fontWeight={400} lineHeight="20px">{ns[`tab${props.index + 1}`].sub_title}</Typography>
            </Box>
        </Box>
    )
}

export default Tab;