import { Box, Typography } from "@mui/material";
import TongtangIconButton from "../../../components/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import R from "../../../resources/Namespace";
import SolarTermCard from "./Card";
import { useCallback, useState } from "react";
import { getImageUrl } from "../../../helpers/urlHelper";

const terms = Array(24).fill(0);
const MAX_WIDTH = 10944;
function SolarTerms() {
    const [left, setLeft] = useState(0);

    const onPrevPage = useCallback(() => {
        const nextLeft = left + window.innerWidth;
        if (nextLeft >= 0) {
            setLeft(0);
        } else {
            setLeft(nextLeft);
        }
    }, [left]);

    const onNextPage = useCallback(() => {
        const nextLeft = left - window.innerWidth;
        if (Math.abs(nextLeft) >= MAX_WIDTH - window.innerWidth) {
            setLeft((MAX_WIDTH - window.innerWidth) * -1);
        } else {
            setLeft(nextLeft);
        }
    }, [left]);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "1091px",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "120px",
                paddingLeft: "140px",
                width: "100%",
            }}>
                <Typography fontSize={24} fontWeight={500} lineHeight="36px" color="#2E3233">
                    {R.strings.cases.solar_terms.title}
                </Typography>
                <Box sx={{
                    width: "690px",
                    height: "120px",
                    backgroundImage: `url(${getImageUrl("/cases/solar_terms/title@2x.png")})`,
                    backgroundSize: "contain",
                }} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "713px",
                    width: "auto",
                    marginTop: "104px",
                    marginLeft: `${left}px`,
                    transition: "all 0.5s ease-in-out",
                    alignSelf: "flex-start",
                }}
            >
                {terms.map((_, index) => {
                    return (
                        <SolarTermCard
                            key={`solar_card${index}`}
                            index={index}
                            reverse={index % 2 === 1}
                        />
                    )
                })}
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "138px",
                height: "44px",
                marginTop: "60px",
            }}>
                <TongtangIconButton
                    variant="outlined"
                    onClick={onPrevPage}
                    icon={<ArrowBackIosNewIcon />}
                />
                <TongtangIconButton
                    variant="outlined"
                    onClick={onNextPage}
                    icon={<ArrowForwardIosIcon />}
                />
            </Box>
        </Box>
    );
}

export default SolarTerms;