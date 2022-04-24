import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TitleBox from "./TitleBox";
import "./index.scss"
import ContentBox from "./ContentBox";
import R from "../../../../resources/Namespace";

gsap.registerPlugin(ScrollTrigger);
function BusinessScope() {
    useEffect(() => {
        gsap.to("#title1", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 62%",
                end: "+=200"
            },
        });
        gsap.to("#row1-box1", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 57%",
                end: "+=200"
            },
        });
        gsap.to("#row1-box2", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 52%",
                end: "+=200"
            },
        });
        gsap.to("#row1-box3", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 47%",
                end: "+=200"
            },
        });
        gsap.to("#row1-box4", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 42%",
                end: "+=200"
            },
        });
        gsap.to("#title2", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 47%",
                end: "+=200"
            },
        });
        gsap.to("#row2-box3", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 42%",
                end: "+=200"
            },
        });
        gsap.to("#row2-box2", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 37%",
                end: "+=200"
            },
        });
        gsap.to("#row2-box1", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: "#businessScope",
                scrub: true,
                start: "top 32%",
                end: "+=200"
            },
        });
    }, []);
    return (
        <Box
            id="businessScope"
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            sx={{
                width: "100%",
                padding: "101px 0",
                backgroundColor: "#F5F5F5",
                scrollSnapAlign: "start",
                height: "1000px",
                boxSizing: "border-box",
            }}
        >
            <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                sx={{
                    minWidth: "1488px",
                    maxWidth: "100vw",
                }}
            >
                <Box className="title">
                    <img src="/home/business_scope/business_scope@2x.png" />
                </Box>
                <Box
                    display="flex"
                    flexDirection={"row"}
                    alignItems="center"
                    className="row1"
                    sx={{
                        minWidth: "1488px",
                        maxWidth: "100vw",
                        height:"304px",
                        marginTop: "40px",
                        marginBottom: "50px",
                    }}>
                    <TitleBox id="title1" background="/home/business_scope/product_line@2x.png" />
                    <ContentBox
                        id="row1-box1"
                        icon={R.strings.business_scope.contents.holiday_gift.icon}
                        mainText={R.strings.business_scope.contents.holiday_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.holiday_gift.secondaryText}
                    />
                    <ContentBox
                        id="row1-box2"
                        icon={R.strings.business_scope.contents.daily_gift.icon}
                        mainText={R.strings.business_scope.contents.daily_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.daily_gift.secondaryText}
                    />
                    <ContentBox
                        id="row1-box3"
                        icon={R.strings.business_scope.contents.ip_gift.icon}
                        mainText={R.strings.business_scope.contents.ip_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.ip_gift.secondaryText}
                    />
                    <ContentBox
                        id="row1-box4"
                        icon={R.strings.business_scope.contents.culture_gift.icon}
                        mainText={R.strings.business_scope.contents.culture_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.culture_gift.secondaryText}
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection={"row"}
                    alignItems="center"
                    className="row2"
                    sx={{
                        minWidth: "1184px",
                        maxWidth: "100vw",
                        height:"304px",
                    }}>
                    <ContentBox
                        id="row2-box1"
                        icon={R.strings.business_scope.contents.supplychain_service.icon}
                        mainText={R.strings.business_scope.contents.supplychain_service.mainText}
                    />
                    <ContentBox
                        id="row2-box1"
                        icon={R.strings.business_scope.contents.it_service.icon}
                        mainText={R.strings.business_scope.contents.it_service.mainText}
                    />
                    <ContentBox
                        id="row2-box1"
                        icon={R.strings.business_scope.contents.warehouse_service.icon}
                        mainText={R.strings.business_scope.contents.warehouse_service.mainText}
                    />
                    <TitleBox id="title2" background="/home/business_scope/service_line@2x.png" />
                </Box>
            </Box>
        </Box>
    )
}

export default BusinessScope;