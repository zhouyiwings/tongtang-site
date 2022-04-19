import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const scrollingAnimationFrameCount = 79;
const scrollingAnimationOffset = 1920;
const staticAnimationFrameCount = 120;
const currentStaticAnimationFrame = (index: number) => (
    `/animation1_imgs/1_00${index < 10 ? `00${index}` : (index < 100 ? `0${index}` : index)}.jpg`
);
const currentScrollingAnimationFrame = (index: number) => (
    `/animation2_imgs/1_000${index < 10 ? `0${index}` : index}.jpg`
);

const staticAnimationImages: any[] = [];
const staticAnimation = {
    frame: 0
};

for (let i = 1; i <= staticAnimationFrameCount; i++) {
    const img = new Image();
    img.src = currentStaticAnimationFrame(i);
    staticAnimationImages.push(img);
}

const scrollingAnimationImages: any[] = [];
const scrollingAnimation = {
    frame: 0,
}

for (let i = 1; i <= scrollingAnimationFrameCount; i++) {
    const img = new Image();
    img.src = currentScrollingAnimationFrame(i);
    scrollingAnimationImages.push(img);
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
        gsap.to("#slogan img", {
            top: "-200px",
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#section1",
                start: "top top",
                end: `+=${1920}`,
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
            }}
        >
            <canvas id="static_animation" />
            <canvas id="scrolling_animation" />
        </Box>
    )
};

export default Animation;