import { Box } from "@mui/material";
import { useCallback, useState } from "react";
import { getImageUrl } from "../../../helpers/urlHelper";
import Tab from "./Tab";
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import Tab3Content from "./Tab3Content";

function CultureDerivative() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onHoverTab = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    return (
        <Box
            sx={{
                width: "100vw",
                height: "1363px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    height: "105px",
                    width: "396px",
                    backgroundImage: `url(${getImageUrl("/cases/culture_derivative/title@2x.png")})`,
                    backgroundSize: "contain",
                    marginTop: "96px",
                    marginBottom: "36px",
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    height: "108px",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Tab onHover={onHoverTab} currentIndex={currentIndex} index={0} />
                <Tab onHover={onHoverTab} currentIndex={currentIndex} index={1} />
                <Tab onHover={onHoverTab} currentIndex={currentIndex} index={2} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "37px",
                }}
            >
                {currentIndex === 0 ? <Tab1Content /> : null}
                {currentIndex === 1 ? <Tab2Content /> : null}
                {currentIndex === 2 ? <Tab3Content /> : null}
            </Box>
        </Box>
    )
}

export default CultureDerivative;