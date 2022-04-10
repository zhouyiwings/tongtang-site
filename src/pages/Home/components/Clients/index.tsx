import { Box } from "@mui/system";

import "./index.scss";

function Clients() {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                width: "100%",
                height: "520px",
                position: "relative",
            }}
        >
            <Box
                className="background"
                sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "1709px",
                    height: "434px",
                }}
            >
                <img src="/home/clients/bg.png" />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    minWidth: "1640",
                    maxWidth: "100%",
                    height: "520px",
                    zIndex: 10,
                }}
            >
                <Box
                    sx={{
                        marginTop: "10px",
                        marginBottom: "38px",
                    }}
                >
                    <img src="/home/clients/title.png" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    sx={{
                        width: "100%",
                        height: "100px",
                    }}
                >
                    <Box className="clientBox">
                        <img src="/home/clients/kuaishou@2x.png" />
                    </Box>
                    <Box className="clientBox">
                        <img src="/home/clients/bytedance@2x.png" />
                    </Box>
                    <Box className="clientBox">
                        <img src="/home/clients/xiaomi@2x.png" />
                    </Box>
                    <Box className="clientBox">
                        <img src="/home/clients/yuxin@2x.png" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Clients;