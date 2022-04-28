import { IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material";
import R from "../../../resources/Namespace";
import TongtangButton from "../../../components/Button";

interface IContactUsModalProps {
    onClose: () => void;
}

function ContactUsModal(props: IContactUsModalProps) {
    return (
        <Box
            sx={{
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "#000",
                opacity: 0.8,
            }} />
            <IconButton
                size="large"
                onClick={props.onClose}
                aria-label="Close"
                disableRipple
                disableFocusRipple
                sx={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    right: "12px",
                    top: "12px",
                    color: "#afafaf",
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    width: "1112px",
                    height: "728px",
                    background: "#fff",
                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "0 0 420px",
                        paddingLeft: "100px",
                        paddingTop: "64px",
                    }}
                >
                    <Box sx={{
                        width: "154px",
                        height: "46px",
                        backgroundImage: "url(/cases/contact_us/contact-method@2x.png)",
                        backgroundSize: "contain",
                        marginBottom: "50px",
                    }} />
                    <Typography color="#FF7005" fontSize={20} marginBottom="13px" fontWeight="bold" lineHeight="29px">
                        {R.strings.cases.contact_us.official_phone_title}
                    </Typography>
                    <Typography color="#2E3233" fontSize={24} marginBottom="36px" fontWeight="bold" lineHeight="36px">
                        {R.strings.cases.contact_us.official_phone}
                    </Typography>
                    <Typography color="#FF7005" fontSize={20} marginBottom="15px" fontWeight="bold" lineHeight="29px">
                        {R.strings.cases.contact_us.beijing_site}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="10px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.beijing_contact_person}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="36px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.beijing_phone}
                    </Typography>
                    <Typography color="#FF7005" fontSize={20} marginBottom="15px" fontWeight="bold" lineHeight="29px">
                        {R.strings.cases.contact_us.shanghai_site}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="10px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.shanghai_contact_person}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="36px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.shanghai_phone}
                    </Typography>
                    <Typography color="#FF7005" fontSize={20} marginBottom="15px" fontWeight="bold" lineHeight="29px">
                        {R.strings.cases.contact_us.shenzhen_site}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="10px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.shenzhen_contact_person}
                    </Typography>
                    <Typography color="#2E3233" fontSize={16} marginBottom="36px" fontWeight={400} lineHeight="24px">
                        {R.strings.cases.contact_us.shenzhen_phone}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "0 0 692px",
                    }}
                >
                    <Box sx={{
                        width: "100%",
                        height: "462px",
                        backgroundImage: "url(/cases/contact_us/contact-banner@2x.png)",
                        backgroundSize: "contain",
                        marginBottom: "65px",
                    }} />
                    <Box sx={{
                        width: "154px",
                        height: "46px",
                        backgroundImage: "url(/cases/contact_us/tongtang-text@2x.png)",
                        backgroundSize: "contain",
                        marginBottom: "20px",
                        marginRight: "100px",
                        marginLeft: "auto",
                    }} />
                    <Box sx={{ marginLeft: "auto", marginRight: "100px"}}>
                        <TongtangButton label={R.strings.cases.contact_us.visit} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUsModal;