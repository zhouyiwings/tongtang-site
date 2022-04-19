import { Box } from "@mui/system";
import TongtangButton from "../../../../components/Button";
import R from "../../../../resources/Namespace";

interface IAccordionTabProps {
    backgroundImg: string;
    index: number;
    hovered: number;
    onMouseOver: (index: number) => void;
    onMouseLeave: (index: number) => void;
    label: string;
}
function AccordionTab(props: IAccordionTabProps) {

    return (
        <Box
            component="li"
            className="tabs"
            onMouseOver={() => props.onMouseOver(props.index)}
            onMouseLeave={() => props.onMouseLeave(props.index)}
            sx={{
                width: props.hovered === props.index ? "1032px" : "152px",
                height: "100%",
                margin: 0,
                padding: 0,
                overflow: "hidden",
                position: "relative",
                transition: "all 0.4s ease-in-out",
                backgroundImage: `url(${props.backgroundImg})`,
                backgroundSize: "cover",
            }}
        >
            
            <Box sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    opacity: props.hovered !== props.index ? 1 : 0,
                    transition: "all 0.4s ease-in-out",
                }}
            />
            <Box display="flex" flexDirection="column" sx={{
                width: "100%",
                height: "100%",
                padding: "40px 55px",
                boxSizing: "border-box",
                opacity: props.hovered !== props.index ? 1 : 0,
                transition: "all 0.4s ease-in-out",
            }}>
                <Box
                    sx={{
                        width: "42px",
                        height: "54px",
                        fontSize: "36px",
                        fontWeight: 500,
                        color: "#fff",
                        zIndex: "10",
                        marginBottom: "32px",
                    }}
                >
                    {`0${props.index + 1}`}
                </Box>
                <Box
                    sx={{
                        width: "42px",
                        height: "54px",
                        fontSize: "36px",
                        fontWeight: 500,
                        color: "#fff",
                        zIndex: "10",
                        whiteSpace: "normal",
                        lineHeight: "47px",
                    }}
                >
                    {props.label}
                </Box>
            </Box>

            <Box sx={{
                    width: "100%",
                    height: "250px",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    opacity: props.hovered === props.index ? 0.8 : 0,
                    transition: "all 0.4s ease-in-out",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    height: "92px",
                    width: "100%",
                    paddingLeft: "56px",
                    paddingRight: "44px",
                    paddingBottom: "42px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    boxSizing: "border-box",
                    opacity: props.hovered === props.index ? 1 : 0,
                    transition: "all 0.4s ease-in-out",
                }}
            >
                <Box sx={{
                    width: "42px",
                    height: "47px",
                    lineHgith: "47px",
                    fontSize: "36px",
                    fontWeight: 500,
                    color: "#fff",
                    zIndex: 10,
                    marginRight: "16px",
                }}>{`0${props.index + 1}`}</Box>
                <Box
                    sx={{
                        height: "47px",
                        fontSize: "36px",
                        fontWeight: 500,
                        color: "#fff",
                        zIndex: "10",
                        whiteSpace: "normal",
                        lineHeight: "47px",
                    }}
                >
                    {props.label}
                </Box>
                <Box sx={{
                    marginLeft: "auto",
                }}>
                    <TongtangButton
                        label={R.strings.common.more_plus}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default AccordionTab;