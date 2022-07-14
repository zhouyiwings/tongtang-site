import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef } from "react";
import { scrollingAnimationFrameCount, scrollingAnimationImages, staticAnimationFrameCount, staticAnimationImages } from "../../../components/GlobalImageLoader/images";

gsap.registerPlugin(ScrollTrigger);
const staticAnimation = {
    frame: 0
};
const scrollingAnimation = {
    frame: 0,
}

function render() {
    const canvas = document.getElementById("static_animation") as any;
    const context = canvas.getContext("2d");

    const img = staticAnimationImages[staticAnimation.frame] as any;
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, 1920, 1920 * canvas.height / canvas.width); 
}

function scrollingRender() {
    const canvas = document.getElementById("scrolling_animation") as any;
    const context = canvas.getContext("2d");

    const img = scrollingAnimationImages[scrollingAnimation.frame] as any;
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, 1920, 1920 * canvas.height / canvas.width); 

}
function Animation() {
    useEffect(() => {
        scrollingAnimationImages[0].onload = scrollingRender;

        gsap.to(scrollingAnimation, {
            frame: scrollingAnimationFrameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: scrollingRender,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top top",
                end: () => window.innerHeight,
                pin: true,
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        staticAnimationImages[0].onload = render;
        gsap.to(staticAnimation, {
            frame: staticAnimationFrameCount - 1,
            snap: "frame",
            ease: "none",
            duration: 4,
            onUpdate: render,
            repeat: -1,
        });

        gsap.to("#static_animation", {
            zIndex: -1,
            height: 0,
            duration: 0.1,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top top",
                end: `+=${1}`,
                scrub: true,
            },
        });

        gsap.to("#scrolling_animation", {
            zIndex: 1,
            opacity: 1,
            duration: 0.1,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top top",
                end: `+=${1}`,
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        gsap.to("#slogan", {
            top: "50px",
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top top",
                end: () => "350px",
                scrub: true,
            },
        });
        gsap.to("#slogan2", {
            top: "600px",
            opacity: 1,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top 50px",
                end: () => window.innerHeight,
                scrub: true,
            },
        });
    }, [])

    return (
        <Box
            className="animationWrapper"
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                paddingTop: "300px",
            }}
        >
            <canvas id="static_animation" />
            <canvas id="scrolling_animation" />
        </Box>
    )
};

export default Animation;