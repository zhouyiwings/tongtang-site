import { Box, Typography } from "@mui/material";
import { useState } from "react";
import R from "../../../resources/Namespace";

function ContactUs() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                width: "100vw",
                height: "950px",
                background: isHovered ? "#fff" : "#FF7005",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.25s ease-in-out",
            }}
        >
            <Box
                sx={{
                    marginTop: "230px",
                    width: "1200px",
                    height: "152px",
                    backgroundImage: isHovered ? "url(/cases/contact_us/main-hovered@2x.png)" : "url(/cases/contact_us/main@2x.png)",
                    backgroundSize: "contain",
                    transition: "all 0.25s ease-in-out",
                }}
            />
            <Box
                sx={{
                    marginTop: "30px",
                    width: "594px",
                    height: "87px",
                    backgroundImage: isHovered ? "url(/cases/contact_us/sub-hovered@2x.png)" : "url(/cases/contact_us/sub@2x.png)",
                    backgroundSize: "contain",
                    transition: "all 0.25s ease-in-out",
                }}
            />
            <Box
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "140px",
                    height: "140px",
                    borderRadius: "140px",
                    backgroundColor: isHovered ? "#FF7005" : "#FF7005",
                    border: isHovered ? "none" : "1px solid #fff",
                    marginTop: "91px",
                    cursor: "pointer",
                    transition: "all 0.25s ease-in-out",
                }}
            >
                <Typography fontSize={24} color={"#fff"} lineHeight="36px" fontWeight={500}>{R.strings.footer.contact_us}</Typography>
            </Box>
        </Box>
    )
}

export default ContactUs;