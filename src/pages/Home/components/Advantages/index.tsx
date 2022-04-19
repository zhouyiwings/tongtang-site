import { Box } from "@mui/system";

function Advantages() {
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            sx={{
                width: "100%",
                height: "1000px",
            }}
        >
        <Box
            sx={{
                height: "106px",
                width: "212px",
            }}>
            <img style={{width: "100%", height: "100%", backgroundSize: "contain"}} src="/home/portfolio/title@2x.png" />
        </Box>
        </Box>
    );
}

export default Advantages;