import { Box, Button, Tab, Tabs, Theme } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { getImageUrl } from "../helpers/urlHelper";
import R from "../resources/Namespace";

function Header() {
    const [show, setShow] = useState(true);
    window.addEventListener('scroll', e => {
        if (window.scrollY > window.innerHeight && show) {
            setShow(false);
        } else if (window.scrollY <= window.innerHeight && !show) {
            setShow(true);
        }
    });
    const location = useLocation();
    const history = useHistory();

    const onClickButton = useCallback(() => {
        window.open("https://tongtanggift.shop/");
    }, []);

    const tabValue = useMemo(() => {
        if (location.pathname.startsWith("/home")) {
            return "1";
        } else if (location.pathname.startsWith("/cases")) {
            return "2";
        } else if (location.pathname.startsWith("/about_us")) {
            return "3";
        } else if (location.pathname.startsWith("/join")) {
            return "4";
        } else if (location.pathname.startsWith("/")) {
            return "1";
        }
    }, [location.pathname]);

    const handleTabChange = useCallback((event, value) => {
        switch(value) {
            case "1":
                history.push("/");
                return;
            case "2":
                history.push("/cases");
                return;
            case "3":
                history.push("/about_us");
                return;
            case "4":
                history.push("/join");
                return;
        }
    }, []);

    return (
        <Box display="flex" flexDirection="row" sx={{
            height: "80px",
            width: "100vw",
            position: "fixed",
            top: show ? 0 : "-80px",
            opacity: show ? 1 : 0,
            transition: "all 0.25s ease-in-out",
            left: 0,
            zIndex: 9999,
        }}>
            <Box display="flex" flexDirection="row" sx={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "80px",
                width: "calc(100vw - 190px)",
                background: "#fff",
                opacity: 0.8,
            }} />
            <Box display="flex" flexDirection="row" sx={{
                height: "80px",
                width: "calc(100vw - 190px)",
                zIndex: 2,
            }}>
                <Box sx={{
                    width: "136px",
                    height: "46px",
                    marginLeft: "54px",
                    marginTop: "17px",
                    "& img": {
                        height: "100%",
                        width: "100%",
                    }
                }}>
                    <img src={getImageUrl("/logo@2x.png")} />
                </Box>
                <Tabs
                    value={tabValue}
                    sx={{
                        height: "100%",
                        margin: "0 auto",
                        '.MuiTabs-indicator': {
                            top: 0,
                        },
                        '.MuiTabs-flexContainer': {
                            height: "100%",
                        },
                        '.MuiTab-root': {
                            paddingLeft: 0,
                            paddingRight: 0,
                            minWidth: "unset",
                            margin: "0 40px",
                        },
                        fontWeight: 500,
                    }}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab sx={{fontSize: "20px", fontWeight: tabValue === "1" ? 600 : 400, color: "#333333"}} disableRipple disableTouchRipple disableFocusRipple label={R.strings.header.tabs.label_home} value="1" />
                    <Tab sx={{fontSize: "20px", fontWeight: tabValue === "2" ? 600 : 400, color: "#333333"}} disableRipple disableTouchRipple disableFocusRipple label={R.strings.header.tabs.label_cases} value="2" />
                    <Tab sx={{fontSize: "20px", fontWeight: tabValue === "3" ? 600 : 400, color: "#333333"}} disableRipple disableTouchRipple disableFocusRipple label={R.strings.header.tabs.label_us} value="3" />
                    <Tab sx={{fontSize: "20px", fontWeight: tabValue === "4" ? 600 : 400, color: "#333333"}} disableRipple disableTouchRipple disableFocusRipple label={R.strings.header.tabs.label_join} value="4" />
                </Tabs>
            </Box>
            <Button
                disableRipple
                disableElevation
                disableFocusRipple
                disableTouchRipple
                variant="contained"
                onClick={onClickButton}
                sx={{
                    backgroundColor: "#ff7006",
                    width: "190px",
                    height: "80px",
                    color: "#fff",
                    borderRadius: 0,
                    fontSize: "20px",
                }}>{R.strings.header.button.mall}</Button>
        </Box>
    )
}

export default withRouter(Header);