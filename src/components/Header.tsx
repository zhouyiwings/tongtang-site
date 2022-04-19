import { Box, Button, Tab, Tabs, Theme } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import R from "../resources/Namespace";

function Header() {
    const location = useLocation();
    const history = useHistory();

    const tabValue = useMemo(() => {
        switch(location.pathname) {
            case "/":
            case "/home":
                return "1";
            case "/cases":
                return "2";
            case "/about_us":
                return "3";
            case "/join":
                return "4";
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
            zIndex: 9999,
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
                <img src="./logo@2x.png" />
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
                <Tab label={R.strings.header.tabs.label_home} value="1" />
                <Tab label={R.strings.header.tabs.label_cases} value="2" />
                <Tab label={R.strings.header.tabs.label_us} value="3" />
                <Tab label={R.strings.header.tabs.label_join} value="4" />
            </Tabs>
            <Button
                disableRipple
                disableElevation
                disableFocusRipple
                disableTouchRipple
                variant="contained"
                sx={{
                    backgroundColor: (theme: Theme) => theme.palette.primary.light,
                    width: "190px",
                    height: "80px",
                    color: "#fff",
                    borderRadius: 0,
                }}>{R.strings.header.button.mall}</Button>
        </Box>
    )
}

export default withRouter(Header);