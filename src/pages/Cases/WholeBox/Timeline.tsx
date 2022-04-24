import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ITimelineProps {
    title: string;
    items: string[];
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    marginTop?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    height: string;
}

function TongtangTimeline(props: ITimelineProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: props.paddingLeft,
                paddingRight: props.paddingRight,
                paddingTop: props.paddingTop,
                position: "absolute",
                width: "100%",
                height: props.height,
                top: props.top,
                left: props.left,
                bottom: props.bottom,
                right: props.right,
                background: "#F5F5F5",
            }}
        >
            <Typography marginTop={props.marginTop} marginBottom="46px" fontSize={20} color="#333333" fontWeight={500}>{props.title}</Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {props.items.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                height: index % 2 === 0 ? "44px" : "38px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "14px",
                                    marginRight: "11px",
                                }}
                            >
                                {index % 2 === 0 ? (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "14px",
                                            height: "14px",
                                            border: "1px solid #f7c5a9",
                                            borderRadius: "14px",
                                            marginTop: "5px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: "8px",
                                                width: "8px",
                                                borderRadius: "8px",
                                                backgroundColor: "#ff7006",
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            height: "8px",
                                            width: "8px",
                                            borderRadius: "8px",
                                            border: "1px solid #747474",
                                            marginTop: "5px",
                                        }}
                                    />
                                )}
                                <Box
                                    sx={{
                                        width: "1px",
                                        height: "20px",
                                        border: "1px solid #B8B8B8",
                                        marginTop: "5px",
                                    }}
                                />
                            </Box>
                            <Typography fontSize={16} color="#252525" fontWeight={400} lineHeight="24px">{item}</Typography>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    )
}

export default TongtangTimeline;