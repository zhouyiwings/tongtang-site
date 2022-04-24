import { Box } from "@mui/system";
import { useState } from "react";
import R from "../../../resources/Namespace";
import NavBox from "./NavBox";

import "./index.scss"
import { Typography } from "@mui/material";

interface ISection1Props {

}

interface ISectionContent {
    title: string;
    detail1: string;
    detail2: string;
    detail3: string;
}
const contents: ISectionContent[] = [

]
function Section1(props: ISection1Props) {
    const [index, setIndex] = useState(0);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                minHeight: "1080px",
                width: "100vw",
            }}
        >
            <Box
                sx={{
                    width: "59.191919%",
                    backgroundImage: `url(/cases/section1/section1-${index + 1}@2x.png)`,
                    backgroundSize: "cover",
                    transition: "all 0.5s",
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "290px",
                    paddingLeft: "108px",
                    paddingRight: "124px",
                }}
            >
                <Box
                    sx={{
                        width: "265px",
                        height: "79px",
                        marginBottom: "32px",
                        backgroundImage: `url(/cases/section1/title${index+1}@2x.png)`,
                        backgroundSize: "contain",
                    }}
                />
                <Typography fontSize={18} fontWeight={400} color="#999999" lineHeight={"34px"}>
                    {(R.strings.cases.section1 as any)[`content${index + 1}`].detail1}
                </Typography>
                <Typography fontSize={18} fontWeight={400} color="#999999" lineHeight={"34px"}>
                    {(R.strings.cases.section1 as any)[`content${index + 1}`].detail2}
                </Typography>
                <Typography fontSize={18} fontWeight={400} color="#999999" lineHeight={"34px"}>
                    {(R.strings.cases.section1 as any)[`content${index + 1}`].detail3}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "240px",
                    width: "960px",
                    position: "absolute",
                    right: "7.291666666%",
                    bottom: "18.055555556%",
                }}
            >
                <NavBox
                    index={0}
                    currentIndex={index}
                    onMouseOver={(index) => setIndex(index)}
                    icon={R.strings.cases.section1.nav1.icon}
                    iconHovered={R.strings.cases.section1.nav1.icon_hovered}
                    title={R.strings.cases.section1.nav1.title}
                    subTitle={R.strings.cases.section1.nav1.sub_title}
                />
                <NavBox
                    index={1}
                    currentIndex={index}
                    onMouseOver={(index) => setIndex(index)}
                    icon={R.strings.cases.section1.nav2.icon}
                    iconHovered={R.strings.cases.section1.nav2.icon_hovered}
                    title={R.strings.cases.section1.nav2.title}
                    subTitle={R.strings.cases.section1.nav2.sub_title}
                />
                <NavBox
                    index={2}
                    currentIndex={index}
                    onMouseOver={(index) => setIndex(index)}
                    icon={R.strings.cases.section1.nav3.icon}
                    iconHovered={R.strings.cases.section1.nav3.icon_hovered}
                    title={R.strings.cases.section1.nav3.title}
                    subTitle={R.strings.cases.section1.nav3.sub_title}
                />
                <NavBox
                    index={3}
                    currentIndex={index}
                    onMouseOver={(index) => setIndex(index)}
                    icon={R.strings.cases.section1.nav4.icon}
                    iconHovered={R.strings.cases.section1.nav4.icon_hovered}
                    title={R.strings.cases.section1.nav4.title}
                    subTitle={R.strings.cases.section1.nav4.sub_title}
                />
            </Box>
        </Box>
    )
}

export default Section1;