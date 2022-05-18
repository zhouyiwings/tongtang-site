import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getImageUrl } from "../../helpers/urlHelper";

function ScrollToTopButton() {
    const [show, setShow] = useState(false);
    window.addEventListener('scroll', e => {
        if (window.scrollY > window.innerHeight && !show) {
            setShow(true);
        } else if (window.scrollY <= window.innerHeight && show) {
            setShow(false);
        }
    });

    const onClick = useCallback(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])

    return (
        <Box
            onClick={onClick}
            sx={{
                position: "fixed",
                right: "16px",
                opacity: !show ? 0 : 1,
                bottom: !show ? "-60px" : "32px",
                transition: "all 0.25s ease-in-out",
                width: "60px",
                height: "60px",
                backgroundImage: `url(${getImageUrl("/back_to_top@2x.png")})`,
                backgroundSize: "contain",
                cursor: "pointer",
            }}
        />
    )
}

export default ScrollToTopButton;