import { Box } from "@mui/system";

function Portfolio() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "1000px",
            }}
        >
            <Box
                sx={{
                    marginTop: "60px",
                    marginLeft: "140px",
                    height: "106px",
                    width: "212px",
                }}
            >
                <img style={{width: "100%", height: "100%", backgroundSize: "contain"}} src="/home/portfolio/title@2x.png" />
            </Box>
        </Box>
    );
}

export default Portfolio;