import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import R from "../../../../resources/Namespace";
import AccordionTab from "./AccordionTab";

function Advantages() {
    const [hovered, setHovered] = useState(0);

    const onMouseOverAccordion = useCallback((index: number) => {
        setHovered(index);
    }, []);
    const onMouseLeaveAccordion = useCallback((index: number) => {
        setHovered(0);
    }, []);
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            sx={{
                width: "100%",
                height: "100vh",
                padding: "100px 0",
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    height: "106px",
                    width: "212px",
                }}>
                <img style={{width: "100%", height: "100%", backgroundSize: "contain"}} src="/home/advantages/title@2x.png" />
            </Box>
            <Box
                className="accordionWrapper"
                sx={{
                    minWidth: "1640px",
                    maxWidth: "100vw",
                    height: "650px",
                    marginTop: "48px",
                }}
            >
                <Box
                    component={"ul"}
                    sx={{
                        width: "100%",
                        height: "100%",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "row",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <AccordionTab
                        label={R.strings.advantages.advantage1}
                        hovered={hovered}
                        onMouseLeave={onMouseLeaveAccordion}
                        onMouseOver={onMouseOverAccordion}
                        index={0}
                        backgroundImg="/home/advantages/bg1@2x.png"
                    />
                    <AccordionTab
                        label={R.strings.advantages.advantage2}
                        hovered={hovered}
                        onMouseLeave={onMouseLeaveAccordion}
                        onMouseOver={onMouseOverAccordion}
                        index={1}
                        backgroundImg="/home/advantages/bg2@2x.png"
                    />
                    <AccordionTab
                        label={R.strings.advantages.advantage3}
                        hovered={hovered}
                        onMouseLeave={onMouseLeaveAccordion}
                        onMouseOver={onMouseOverAccordion}
                        index={2}
                        backgroundImg="/home/advantages/bg3@2x.png"
                    />
                    <AccordionTab
                        label={R.strings.advantages.advantage4}
                        hovered={hovered}
                        onMouseLeave={onMouseLeaveAccordion}
                        onMouseOver={onMouseOverAccordion}
                        index={3}
                        backgroundImg="/home/advantages/bg4@2x.png"
                    />
                    <AccordionTab
                        label={R.strings.advantages.advantage5}
                        hovered={hovered}
                        onMouseLeave={onMouseLeaveAccordion}
                        onMouseOver={onMouseOverAccordion}
                        index={4}
                        backgroundImg="/home/advantages/bg5@2x.png"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Advantages;