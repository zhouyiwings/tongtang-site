import { Box, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { getImageUrl } from "../../helpers/urlHelper";
import R from "../../resources/Namespace";
import { Map, Marker } from "react-amap";

function Location() {
    const [locationIndex, setLocationIndex] = useState(0);

    const onMouseOver = useCallback((index: number) => {
        setLocationIndex(index);
    }, []);

    const longitude = useMemo(() => {
        switch (locationIndex) {
            case 0: {
                return R.strings.about_us.location.beijing.coordinate[0];
            }
            case 1: {
                return R.strings.about_us.location.shanghai.coordinate[0];
            }
            case 2: {
                return R.strings.about_us.location.shenzhen.coordinate[0];
            }
            default:
                return R.strings.about_us.location.beijing.coordinate[0];
        }
    }, [locationIndex]);
    const latitude = useMemo(() => {
        switch (locationIndex) {
            case 0: {
                return R.strings.about_us.location.beijing.coordinate[1];
            }
            case 1: {
                return R.strings.about_us.location.shanghai.coordinate[1];
            }
            case 2: {
                return R.strings.about_us.location.shenzhen.coordinate[1];
            }
            default:
                return R.strings.about_us.location.beijing.coordinate[1];
        }
    }, [locationIndex]);
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "1040px",
            paddingTop: "96px",
            paddingBottom: "146px",
            alignItems: "center",
        }}>
            <Box sx={{
                height: "105px",
                width: "350px",
                backgroundImage: `url(${getImageUrl("/about_us/location_title@2x.png")})`,
                backgroundSize: "contain",
                marginRight: "99px",
            }} />
            <Box sx={{
                width: "1488px",
                height: "630px",
                display: "flex",
                flexDirection: "row",
                marginTop: "63px",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "0 0 608px",
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: "54px",
                            paddingTop: "65px",
                            width: "100%",
                            height: "210px",
                            backgroundColor: locationIndex === 0 ? "#f7f7f7" : "#fff",
                            "&:hover": {
                                cursor: "pointer",
                            }
                        }}
                        onMouseOver={() => onMouseOver(0)}
                    >
                        <Box sx={{
                            width: "36px",
                            height: "36px",
                            backgroundImage: locationIndex === 0 ? `url(${getImageUrl("/about_us/pin_selected@2x.png")})` : `url(${getImageUrl("/about_us/pin@2x.png")})`,
                            backgroundSize: "contain",
                            marginRight: "27px",
                        }} />
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Typography marginBottom="10px" fontSize={28} fontWeight={600} lineHeight="41px" color={locationIndex === 0 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.beijing.title}
                            </Typography>
                            <Typography fontSize={18} fontWeight={400} lineHeight="32px" color={locationIndex === 0 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.beijing.address}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: "54px",
                            paddingTop: "65px",
                            width: "100%",
                            height: "210px",
                            backgroundColor: locationIndex === 1 ? "#f7f7f7" : "#fff",
                            "&:hover": {
                                cursor: "pointer",
                            }
                        }}
                        onMouseOver={() => onMouseOver(1)}
                    >
                        <Box sx={{
                            width: "36px",
                            height: "36px",
                            backgroundImage: locationIndex === 1 ? `url(${getImageUrl("/about_us/pin_selected@2x.png")})` : `url(${getImageUrl("/about_us/pin@2x.png")})`,
                            backgroundSize: "contain",
                            marginRight: "27px",
                        }} />
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Typography marginBottom="10px" fontSize={28} fontWeight={600} lineHeight="41px" color={locationIndex === 1 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.shanghai.title}
                            </Typography>
                            <Typography fontSize={18} fontWeight={400} lineHeight="32px" color={locationIndex === 1 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.shanghai.address}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: "54px",
                            paddingTop: "65px",
                            width: "100%",
                            height: "210px",
                            backgroundColor: locationIndex === 2 ? "#f7f7f7" : "#fff",
                            "&:hover": {
                                cursor: "pointer",
                            }
                        }}
                        onMouseOver={() => onMouseOver(2)}
                    >
                        <Box sx={{
                            width: "36px",
                            height: "36px",
                            backgroundImage: locationIndex === 2 ? `url(${getImageUrl("/about_us/pin_selected@2x.png")})` : `url(${getImageUrl("/about_us/pin@2x.png")})`,
                            backgroundSize: "contain",
                            marginRight: "27px",
                        }} />
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Typography marginBottom="10px" fontSize={28} fontWeight={600} lineHeight="41px" color={locationIndex === 2 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.shenzhen.title}
                            </Typography>
                            <Typography fontSize={18} fontWeight={400} lineHeight="32px" color={locationIndex === 2 ? "#FF7005" : "#2E3233"}>
                                {R.strings.about_us.location.shenzhen.address}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    flex: "0 0 880px",
                    height: "630px",
                }}>
                    <Map amapkey="d74510cd555e630dcd5405bcae7c9ef0" zoom={18} center={{
                        longitude,
                        latitude,
                    }}>
                        <Marker position={{longitude, latitude}} />
                    </Map>
                </Box>
            </Box>
        </Box>
    )
}

export default Location;