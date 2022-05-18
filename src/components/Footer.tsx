import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getImageUrl } from "../helpers/urlHelper";
import R from "../resources/Namespace";

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${getImageUrl("/footer/bg@2x.png")})`,
                backgroundSize: "cover",
                paddingTop: "80px",
                paddingLeft: "140px",
                paddingRight: "140px",
                paddingBottom: "44px",
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
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography fontSize={36} fontWeight={500}
                            sx={{
                                marginBottom: "30px",
                                lineHeight: "54px",
                                color: "#fff",
                            }}
                        >
                            {R.strings.footer.contact_us}
                        </Typography>
                        <Typography fontSize={20} fontWeight={400}
                            sx={{
                                marginBottom: "20px",
                                lineHeight: "29px",
                                color: "#fff",
                            }}
                        >
                            {R.strings.footer.email}
                        </Typography>
                        <Typography fontSize={20} fontWeight={400}
                            sx={{
                                marginBottom: "20px",
                                lineHeight: "29px",
                                color: "#fff",
                            }}
                        >
                            {R.strings.footer.phone}
                        </Typography>
                        <Typography fontSize={20} fontWeight={400}
                            sx={{
                                lineHeight: "29px",
                                color: "#fff",
                            }}
                        >
                            {R.strings.footer.address}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginRight: "152px",
                        }}
                    >
                        <Box
                            sx={{
                                height: "196px",
                                width: "196px",
                                backgroundImage: `url(${getImageUrl("/home/qrcode@2x.png")})`,
                                backgroundSize: "contain",
                                marginBottom: "18px",
                            }}
                        />
                        <Typography fontSize={20} fontWeight={400} color="#fff" sx={{
                            lineHeight: "29px",
                        }}>{R.strings.footer.official_qr_code}</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "1px",
                        background: "#fff",
                        opacity: 0.2,
                        marginTop: "66px",
                        marginBottom: "54px",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "16px",
                    }}>
                        <Typography fontSize={12} fontWeight={400} color="#fff" sx={{lineHeight: "18px", marginRight: "18px"}}>
                            {R.strings.footer.claim1}
                        </Typography>
                        <Typography fontSize={12} fontWeight={400} color="#fff" sx={{lineHeight: "18px", marginRight: "12px"}}>
                            {R.strings.footer.claim2}
                        </Typography>
                        <Typography fontSize={12} fontWeight={400} color="#fff" sx={{lineHeight: "18px", marginRight: "12px"}}>
                            {R.strings.footer.claim3}
                        </Typography>
                    </Box>
                    <Typography fontSize={12} fontWeight={400} color="#fff" sx={{lineHeight: "18px"}}>
                        {R.strings.footer.claim5}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;