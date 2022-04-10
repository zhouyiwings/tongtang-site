import { Box } from "@mui/material";
import TitleBox from "./TitleBox";
import "./index.scss"
import ContentBox from "./ContentBox";
import R from "../../../../resources/Namespace";

function BusinessScope() {

    return (
        <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            sx={{
                width: "100%",
                height: "1005px",
                padding: "101px 0",
                backgroundColor: "#F5F5F5",
            }}
        >
            <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                sx={{
                    minWidth: "1488px",
                    maxWidth: "100vw",
                }}
            >
                <Box className="title">
                    <img src="/home/business_scope/business_scope@2x.png" />
                </Box>
                <Box
                    display="flex"
                    flexDirection={"row"}
                    alignItems="center"
                    className="row1"
                    sx={{
                        minWidth: "1488px",
                        maxWidth: "100vw",
                        height:"304px",
                        marginTop: "40px",
                        marginBottom: "50px",
                    }}>
                    <TitleBox background="/home/business_scope/product_line@2x.png" />
                    <ContentBox
                        icon={R.strings.business_scope.contents.holiday_gift.icon}
                        mainText={R.strings.business_scope.contents.holiday_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.holiday_gift.secondaryText}
                    />
                    <ContentBox
                        icon={R.strings.business_scope.contents.daily_gift.icon}
                        mainText={R.strings.business_scope.contents.daily_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.daily_gift.secondaryText}
                    />
                    <ContentBox
                        icon={R.strings.business_scope.contents.ip_gift.icon}
                        mainText={R.strings.business_scope.contents.ip_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.ip_gift.secondaryText}
                    />
                    <ContentBox
                        icon={R.strings.business_scope.contents.culture_gift.icon}
                        mainText={R.strings.business_scope.contents.culture_gift.mainText}
                        secondaryText={R.strings.business_scope.contents.culture_gift.secondaryText}
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection={"row"}
                    alignItems="center"
                    className="row2"
                    sx={{
                        minWidth: "1184px",
                        maxWidth: "100vw",
                        height:"304px",
                    }}>
                    <ContentBox
                        icon={R.strings.business_scope.contents.supplychain_service.icon}
                        mainText={R.strings.business_scope.contents.supplychain_service.mainText}
                    />
                    <ContentBox
                        icon={R.strings.business_scope.contents.it_service.icon}
                        mainText={R.strings.business_scope.contents.it_service.mainText}
                    />
                    <ContentBox
                        icon={R.strings.business_scope.contents.warehouse_service.icon}
                        mainText={R.strings.business_scope.contents.warehouse_service.mainText}
                    />
                    <TitleBox background="/home/business_scope/service_line@2x.png" />
                </Box>
            </Box>
        </Box>
    )
}

export default BusinessScope;