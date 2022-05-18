import { Box } from "@mui/material";
import { useState } from "react";
import { getImageUrl } from "../../../helpers/urlHelper";

import "./index.scss";

const images_row1 = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/1-${index+1}.png`;
});
const images_row1_repeat = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/1-${index+1}.png`;
});
const images_row2 = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/2-${index+1}.png`;
});
const images_row2_repeat = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/2-${index+1}.png`;
});
const images_row3 = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/3-${index+1}.png`;
});
const images_row3_repeat = Array(18).fill(0).map((_, index) => {
    return `/cases/tongtang_reserve/3-${index+1}.png`;
});
function Reserve() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                width: "100vw",
                height: "1315px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#F5F5F5",
            }}
        >
            <Box
                sx={{
                    height: "105px",
                    width: "246px",
                    backgroundImage: `url(${getImageUrl("/cases/tongtang_reserve/title@2x.png")})`,
                    backgroundSize: "contain",
                    marginTop: "96px",
                    marginBottom: "50px",
                }}
            />
            <Box
                className="slideshow"
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    height: "964px",
                    width: "100vw",
                }}
            >
                <Box
                    className={`images`}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "32px",
                        }}
                    >
                        {images_row1.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                        {images_row1_repeat.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "32px",
                            marginLeft: "-84px",
                        }}
                    >
                        {images_row2.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                        {images_row2_repeat.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "-168px",
                        }}
                    >
                        {images_row3.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                        {images_row3_repeat.map((url) => {
                            return (
                                <Box key={url} className="image" sx={{backgroundImage: `url(${getImageUrl(url)})`}} />
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Reserve;