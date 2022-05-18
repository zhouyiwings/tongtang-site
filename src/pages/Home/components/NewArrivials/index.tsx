import { Typography } from "@mui/material";
import gsap from "gsap";
import { useCallback, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box } from "@mui/system";
import ArrivalBox from "./ArrivalBox";
import R from "../../../../resources/Namespace";

import "./index.scss";
import TongtangButton from "../../../../components/Button";

gsap.registerPlugin(ScrollTrigger);
function NewArrivals() {
    
    const onClickMore = useCallback(() => {
        window.open("https://tongtanggift.shop/");
    }, []);
    
    useEffect(() => {
        /* 这部分是初步的动效，第一版本先不做，因为还没确定
        gsap.to("#box1", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#newArrivals",
                scrub: true,
                start: "top 65%",
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
                start: "top 60%",
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
                start: "top 55%",
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
                start: "top 55%",
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
                start: "top 50%",
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
                start: "top 50%",
                end: "+=200"
            },
        })
        */
    }, []);
    return (
        <Box
            id="newArrivals"
            sx={{
                width: "100vw",
                height: "1000px",
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
                <ArrivalBox id="box1" mainText="T恤" secondaryText="T恤（春日限定T恤）" width="412px" height="650px" background="/home/new_arrivals/new_arrivals1@2x.png" />
                <ArrivalBox id="box2" mainText="外套" secondaryText="外套（春日限定外套）" width="424px" height="436px" background="/home/new_arrivals/new_arrivals2@2x.png" />
                <ArrivalBox id="box3" mainText="卫衣" secondaryText="卫衣（春日限定卫衣）" width="425px" height="544px" background="/home/new_arrivals/new_arrivals3@2x.png" />
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
                            width: "252px",
                            height: "105px",
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
                        }}
                    >
                        <Typography fontSize={16} lineHeight="32px" color="#252525">{
                            [
                                R.strings.new_arrivals.description[0],
                                <br />,
                                R.strings.new_arrivals.description[1],
                                <br />,
                                R.strings.new_arrivals.description[2],
                            ]
                        }</Typography>
                    </Box>
                    <TongtangButton
                        id="more_btn"
                        label={R.strings.common.more_plus}
                        onClick={onClickMore}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default NewArrivals;