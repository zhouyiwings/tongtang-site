import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TongtangButton from "../../../components/Button";
import { getImageUrl } from "../../../helpers/urlHelper";
import R from "../../../resources/Namespace";

interface IThumbnailProps {
    width: string;
    height: string;
    marginBottom?: string;
    index: number;
    onClickMore: (index: number) => void;
}

function Thumbnail(props: IThumbnailProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                width: props.width,
                height: props.height,
                backgroundImage: `url(${getImageUrl(`/cases/whole_box/case${props.index + 1}@2x.png`)})`,
                marginBottom: props.marginBottom,
                backgroundSize: "contain",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    opacity: isHovered ? 1 : 0,
                    cursor: "pointer",
                    transition: "0.25s all ease-in-out",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#000",
                        opacity: 0.4,
                    }}
                />
                <Typography fontSize={20} fontWeight={500} color="#ffffff"
                    sx={{
                        lineHeight: "29px",
                        marginBottom: "34px",
                        zIndex: 5,
                    }}
                >
                    {(R.strings.cases.whole_box as any)[`box${props.index + 1}`].title}
                </Typography>
                <Box>
                    <TongtangButton
                        onClick={() => props.onClickMore(props.index)}
                        label={R.strings.common.more_plus}
                        filledBeDefault
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Thumbnail;