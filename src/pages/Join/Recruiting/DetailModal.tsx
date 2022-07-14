import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import R from "../../../resources/Namespace";
import { getImageUrl } from "../../../helpers/urlHelper";

interface IDetailModalProps {
    onClose: () => void;
    positionKey: string;
}
function DetailModal(props: IDetailModalProps) {
    const recruitPosition = (R.strings.join_us.recruit as any)[props.positionKey];
    return (
        <Box
            sx={{
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
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
                    right: "18px",
                    top: "6px",
                    color: "#afafaf",
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box sx={{
                position: "relative",
                width: "1041px",
                height: "779px",
                background: "#fff",
                zIndex: 99,
                paddingTop: "56px",
                paddingLeft: "46px",
                paddingBottom: "52px",
                display: "flex",
                flexDirection: "column",
            }}>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "16px"}}>
                    <Box sx={{
                        position: "relative",
                        flex: "0 0 auto",
                    }}>
                        <Typography fontSize={24} fontWeight="bold" color="#2E3233" lineHeight="36px">
                            {recruitPosition.title}
                        </Typography>
                        <Box sx={{
                            width: "100%",
                            height: "8px",
                            background: "#FF7005",
                            position: "absolute",
                            bottom: "4px",
                            left: 0,
                            zIndex: -1,
                        }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "51px",
                }}
                >
                    <Box sx={{
                        width: "14px",
                        height: "14px",
                        backgroundImage: `url(${getImageUrl("/join_us/location@2x.png")})`,
                        backgroundSize: "contain",
                        marginRight: "4px",
                    }} />
                    <Typography fontSize={14} fontWeight={400} color="#999999" lineHeight="20px" marginRight="12px">
                        {recruitPosition.location}
                    </Typography>
                    <Box sx={{
                        width: "1px",
                        height: "11px",
                        border: "1px solid #EBEBEB",
                        marginRight: "12px",
                    }} />
                    <Typography fontSize={14} fontWeight={400} color="#999999" lineHeight="20px" marginRight="12px">
                        {`${R.strings.join_us.publish_date_title}: ${recruitPosition.publish_date}`}
                    </Typography>
                    <Box sx={{
                        width: "1px",
                        height: "11px",
                        border: "1px solid #EBEBEB",
                        marginRight: "12px",
                    }} />
                    <Typography fontSize={14} fontWeight={400} color="#999999" lineHeight="20px" marginRight="12px">
                        {`${R.strings.join_us.base_salary_title}: ${recruitPosition.base_salary}`}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "12px",
                }}>
                    <Typography fontSize={16} fontWeight="bold" color="#2E3233" lineHeight="24px" marginBottom="18px">
                        {`${R.strings.join_us.position_responsibility}:`}
                    </Typography>
                    {recruitPosition.responsibilities.map((res: any, index: number) => {
                        return (
                            <Box key={`res${[index]}`}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: "12px",
                                }}>
                                    <Box sx={{
                                        backgroundImage: `url(${getImageUrl("/join_us/square@2x.png")})`,
                                        backgroundSize: "contain",
                                        marginRight: "8px",
                                        width: "7px",
                                        height: "7px",
                                    }} />
                                    <Typography fontSize={14} fontWeight={400} lineHeight="20px" color="#666666">
                                        {res}
                                    </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "12px",
                }}>
                    <Typography fontSize={16} fontWeight="bold" color="#2E3233" lineHeight="24px" marginBottom="18px">
                        {`${R.strings.join_us.position_requirement}:`}
                    </Typography>
                    {recruitPosition.requirements.map((req: any, index: number) => {
                        return (
                            <Box key={`req${[index]}`}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: "12px",
                                }}>
                                    <Box sx={{
                                        backgroundImage: `url(${getImageUrl("/join_us/square@2x.png")})`,
                                        backgroundSize: "contain",
                                        marginRight: "8px",
                                        width: "7px",
                                        height: "7px",
                                    }} />
                                    <Typography fontSize={14} fontWeight={400} lineHeight="20px" color="#666666">
                                        {req}
                                    </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "12px",
                }}>
                    <Typography fontSize={16} fontWeight="bold" color="#2E3233" lineHeight="24px" marginBottom="18px">
                        {`${R.strings.join_us.contact_title}:`}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "12px",
                        }}>
                            <Box sx={{
                                backgroundImage: `url(${getImageUrl("/join_us/square@2x.png")})`,
                                backgroundSize: "contain",
                                marginRight: "8px",
                                width: "7px",
                                height: "7px",
                            }} />
                            <Typography fontSize={14} fontWeight={400} lineHeight="20px" color="#666666">
                                {R.strings.join_us.contact}
                            </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: "146px",
                    height: "725px",
                    position: "absolute",
                    right: "32px",
                    bottom: 0,
                    backgroundImage: `url(${getImageUrl("/join_us/joinus@2x.png")})`,
                    backgroundSize: "contain",
                }} />
            </Box>
        </Box>
    )
}

export default DetailModal;