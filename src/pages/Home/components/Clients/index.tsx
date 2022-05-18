import { Box } from "@mui/system";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TongtangButton from "../../../../components/Button";
import { getImageUrl } from "../../../../helpers/urlHelper";
import R from "../../../../resources/Namespace";

import "./index.scss";

function Clients() {
    const history = useHistory();
    const onClickMore = useCallback(() => {
        history.push("/cases/#client_wall");
    }, [])
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                width: "100%",
                height: "520px",
                position: "relative",
                paddingTop: "96px",
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
                <img src={getImageUrl("/home/clients/bg.png")} />
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
                    <img src={getImageUrl("/home/clients/title.png")} />
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
                        <img src={getImageUrl("/home/clients/kuaishou@2x.png")} />
                    </Box>
                    <Box className="clientBox">
                        <img src={getImageUrl("/home/clients/bytedance@2x.png")} />
                    </Box>
                    <Box className="clientBox">
                        <img src={getImageUrl("/home/clients/xiaomi@2x.png")} />
                    </Box>
                    <Box className="clientBox">
                        <img src={getImageUrl("/home/clients/yuxin@2x.png")} />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "50px",
                }}>
                    <TongtangButton
                        id="more_btn"
                        label={R.strings.common.more_plus}
                        onClick={onClickMore}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Clients;