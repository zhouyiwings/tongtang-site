import { Button, Theme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrivalBox from "./ArrivalBox";
import R from "../../../../resources/Namespace";

import "./index.scss";

function NewArrivals() {

    return (
        <Box
            sx={{
                width: "100vw",
                height: "1000px",
                position: "relative",
                backgroundColor: "#fff",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    bottom: "100px",
                    left: 0,
                    width: "1476px",
                    height: "563px",
                    background: "#F5F5F5",
                }}
            />
            <Box
                display="flex"
                flexDirection="row"
                sx={{
                    marginTop: "160px",
                    height: "650px",
                }}
            >
                <ArrivalBox mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="412px" height="650px" background="/home/new_arrivals/new_arrivals1@2x.png" />
                <ArrivalBox mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="424px" height="436px" background="/home/new_arrivals/new_arrivals2@2x.png" />
                <ArrivalBox mainText="示例文字" secondaryText="核心成员拥有10年以上供应链管理经验；设计团队多次荣获国际国内设计大奖。" width="425px" height="544px" background="/home/new_arrivals/new_arrivals3@2x.png" />
                <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                        height: "571px",
                        width: "348px",
                        marginLeft: "90px",
                        alignSelf: "center",
                        zIndex: 10,
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: "28px",
                        }}
                    >
                        <img src="/home/new_arrivals/title@2x.png" style={{backgroundSize: "contain", width: "100%"}} />
                    </Box>
                    <Box
                        sx={{
                            marginBottom: "40px",
                            width: "348px",
                        }}
                    >
                        <Typography fontSize={16} lineHeight="32px" color="#252525">{R.strings.new_arrivals.description}</Typography>
                    </Box>
                    <Button
                        disableRipple
                        disableElevation
                        disableFocusRipple
                        disableTouchRipple
                        variant="outlined"
                        sx={{
                            width: "152px",
                            height: "50px",
                            color: (theme: Theme) => theme.palette.primary.light,
                        }}>{R.strings.common.more_plus}</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default NewArrivals;