import { Box, Typography } from "@mui/material";
import TongtangButton from "../../../components/Button";
import R from "../../../resources/Namespace";

interface IRecruitingCardProps {
    positionKey: string;
    onViewDetail: (positionKey: string) => void;
}
function RecruitingCard(props: IRecruitingCardProps) {
    const recruitPosition = (R.strings.join_us.recruit as any)[props.positionKey];
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            width: "500px",
            height: "130px",
            position: "relative",
            borderBottom: "1px solid #EBEBEB"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Typography fontSize={22} fontWeight={500} color="#2E3233" lineHeight="33px" marginBottom="10px">
                    {recruitPosition.title}
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#999999" lineHeight="24px" marginBottom="8px">
                    {`${R.strings.join_us.work_location_title}: ${recruitPosition.location}`}
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#999999" lineHeight="24px" marginBottom="30px">
                    {`${R.strings.join_us.publish_date_title}: ${recruitPosition.publish_date}`}
                </Typography>
            </Box>
            <Box sx={{
                position: "absolute",
                right: 0,
                top: "32px",
            }}>
                <TongtangButton label={R.strings.join_us.view_detail} onClick={() => props.onViewDetail(props.positionKey)} />
            </Box>
        </Box>
    )
}

export default RecruitingCard;