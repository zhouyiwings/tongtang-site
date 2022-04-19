import { Typography } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box } from "@mui/system";
import ArrivalBox from "./ArrivalBox";
import R from "../../../../resources/Namespace";

import "./index.scss";
import TongtangButton from "../../../../components/Button";

gsap.registerPlugin(ScrollTrigger);
function NewArrivals() {
    useEffect(() => {
        gsap.to("#box1", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 60%",
                end: "+=200"
            },
        });
        gsap.to("#box2", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 55%",
                end: "+=200"
            },
        });
        gsap.to("#box3", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 50%",
                end: "+=200"
            },
        });
        gsap.to("#shadow", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 50%",
                end: "+=200"
            },
        });
        gsap.to("#text", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 45%",
                end: "+=200"
            },
        });
        gsap.to("#more_btn", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 45%",
                end: "+=200"
            },
        })
    }, []);
    return (
        <Box
            id="newArrivals"
            sx={{
                width: "100vw",
                height: "100vh",
                boxSizing: "border-box",
                position: "relative",
                backgroundColor: "#fff",
                scrollSnapAlign: "start",
            }}
        >
            <Box
                id="shadow"
                sx={{
                    position: "absolute",
                    top: "337px",
                    left: 0,
                    width: "1476px",
                    height: "563px",
                    background: "#F5F5F5",
                    opacity: 0,
                }}
            />
            <Box
                display="flex"
                flexDirection="row"
                sx={{
                    marginTop: "160px",
                    height: "650px",
                }}
            >
                <ArrivalBox id="box1" mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="412px" height="650px" background="/home/new_arrivals/new_arrivals1@2x.png" />
                <ArrivalBox id="box2" mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="424px" height="436px" background="/home/new_arrivals/new_arrivals2@2x.png" />
                <ArrivalBox id="box3" mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="425px" height="544px" background="/home/new_arrivals/new_arrivals3@2x.png" />
                <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                        height: "571px",
                        width: "348px",
                        marginLeft: "90px",
                        alignSelf: "center",
                        zIndex: 10,
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: "28px",
                        }}
                    >
                        <img src="/home/new_arrivals/title@2x.png" style={{backgroundSize: "contain", width: "100%"}} />
                    </Box>
                    <Box
                        id="text"
                        sx={{
                            marginBottom: "40px",
                            width: "348px",
                            opacity: 0,
                        }}
                    >
                        <Typography fontSize={16} lineHeight="32px" color="#252525">{R.strings.new_arrivals.description}</Typography>
                    </Box>
                    <TongtangButton
                        id="more_btn"
                        opacity={0}
                        label={R.strings.common.more_plus}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default NewArrivals;