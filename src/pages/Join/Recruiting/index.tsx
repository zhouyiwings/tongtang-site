import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { getImageUrl } from "../../../helpers/urlHelper";
import R from "../../../resources/Namespace";
import DetailModal from "./DetailModal";
import RecruitingCard from "./RecruitingCard";

function Recruiting() {
    const [positionDetailKey, setPositionDetailKey] = useState("");

    const onViewDetail = useCallback((positionKey: string) => setPositionDetailKey(positionKey), []);
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "1290px",
            paddingTop: "80px",
        }}
        >
            <Box sx={{
                width: "326px",
                height: "105px",
                backgroundImage: `url(${getImageUrl("/join_us/recruit_title@2x.png")})`,
                backgroundSize: "contain",
                marginBottom: "62px",
            }} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "32px",
                }}>
                    <Box sx={{
                        width: "3px",
                        height: "22px",
                        background: "#FF7005",
                        marginRight: "16px",
                    }} />
                    <Typography color="#FF7005" fontSize={27} fontWeight="bold" lineHeight="40px">
                        {R.strings.join_us.recruit_beijing}
                    </Typography> 
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "23px",
                    justifyContent: "space-between",
                    width: "1184px",
                }}>
                    <RecruitingCard
                        positionKey="beijing_pos1"
                        onViewDetail={onViewDetail}
                    />
                    <RecruitingCard
                        positionKey="beijing_pos2"
                        onViewDetail={onViewDetail}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "23px",
                    justifyContent: "space-between",
                    width: "1184px",
                }}>
                    <RecruitingCard
                        positionKey="beijing_pos3"
                        onViewDetail={onViewDetail}
                    />
                    <RecruitingCard
                        positionKey="beijing_pos4"
                        onViewDetail={onViewDetail}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "1184px",
                    marginBottom: "80px",
                }}>
                    <RecruitingCard
                        positionKey="beijing_pos5"
                        onViewDetail={onViewDetail}
                    />
                    <RecruitingCard
                        positionKey="beijing_pos6"
                        onViewDetail={onViewDetail}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "32px",
                }}>
                    <Box sx={{
                        width: "3px",
                        height: "22px",
                        background: "#FF7005",
                        marginRight: "16px",
                    }} />
                    <Typography color="#FF7005" fontSize={27} fontWeight="bold" lineHeight="40px">
                        {R.strings.join_us.recruit_shenzhen}
                    </Typography> 
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "23px",
                    justifyContent: "space-between",
                    width: "1184px",
                }}>
                    <RecruitingCard
                        positionKey="shenzhen_pos1"
                        onViewDetail={onViewDetail}
                    />
                    <RecruitingCard
                        positionKey="shenzhen_pos2"
                        onViewDetail={onViewDetail}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "23px",
                    justifyContent: "space-between",
                    width: "1184px",
                }}>
                    <RecruitingCard
                        positionKey="shenzhen_pos3"
                        onViewDetail={onViewDetail}
                    />
                </Box>
            </Box>
            {!!positionDetailKey ? <DetailModal onClose={() => setPositionDetailKey("")} positionKey={positionDetailKey} /> : null}
        </Box>
    )
}

export default Recruiting;