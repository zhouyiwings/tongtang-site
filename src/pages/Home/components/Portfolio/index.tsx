import { Box } from "@mui/system";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TongtangIconButton from "../../../../components/IconButton";
import R from "../../../../resources/Namespace";
import { Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import TongtangButton from "../../../../components/Button";

interface IContent {
    title: string,
    desc: string,
    url: string,
}
const contents: IContent[] = [
    {
        title: R.strings.portfolio.title1,
        desc: R.strings.portfolio.desc1,
        url: "/home/portfolio/case1@2x.png",
    },
    {
        title: R.strings.portfolio.title2,
        desc: R.strings.portfolio.desc2,
        url: "/home/portfolio/case2@2x.png",
    },
    {
        title: R.strings.portfolio.title3,
        desc: R.strings.portfolio.desc3,
        url: "/home/portfolio/case3@2x.png",
    },
]
function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const history = useHistory();

    const onClickMore = () => {
        history.push("/cases/#whole_box_section");
    }

    const onClickNext = useCallback(() => {
        setCurrentIndex((currentIndex + 1) % contents.length);
    }, [currentIndex]);

    const onClickPrev = useCallback(() => {
        const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : contents.length - 1;
        setCurrentIndex(prev);
    }, [currentIndex]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "1000px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1920px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            marginTop: "60px",
                            marginLeft: "140px",
                            height: "106px",
                            width: "212px",
                        }}
                    >
                        <img style={{width: "100%", height: "100%", backgroundSize: "contain"}} src="/home/portfolio/title@2x.png" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "804px",
                                zIndex: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "430px",
                                    width: "804px",
                                    background: "#fff",
                                    boxShadow: "0px 16px 27px -17px rgba(0, 0, 0, 0.14)",
                                    padding: "70px 90px",
                                    marginTop: "61px",
                                }}
                            >
                                <Typography sx={{marginLeft: "51px"}} fontWeight={500} fontSize={24}>{contents[currentIndex].title}</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        height: "128px",
                                        width: "659px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Box sx={{
                                        height: "100%",
                                        width: "1px",
                                        backgroundColor: "#FE7328",
                                        marginRight: "50px",
                                    }} />
                                    <Typography
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={"32px"}
                                    >
                                        {contents[currentIndex].desc}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    marginTop: "52px",
                                    marginLeft: "51px",
                                }}>
                                    <TongtangButton
                                        onClick={onClickMore}
                                        label={R.strings.common.more_plus}
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    height: "44px",
                                    width: "120px",
                                    marginLeft: "476px",
                                    marginTop: "70px",
                                }}
                            >
                                <TongtangIconButton
                                    icon={<ArrowBackIosNewIcon />}
                                    marginRight="32px"
                                    onClick={onClickPrev}
                                    variant="outlined"
                                />
                                <TongtangIconButton
                                    icon={<ArrowForwardIosIcon />}
                                    marginRight="32px"
                                    onClick={onClickNext}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "1252px",
                                height: "710px",
                                marginLeft: "-136px",
                                backgroundImage: `url(${contents[currentIndex].url})`,
                                backgroundSize: "contain",
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Portfolio;