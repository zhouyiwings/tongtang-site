import { Box } from "@mui/material";

function CultureDerivative() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "1363px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    height: "105px",
                    width: "396px",
                    backgroundImage: "url(/cases/culture_derivative/title@2x.png)",
                    backgroundSize: "contain",
                    marginTop: "96px",
                    marginBottom: "36px",
                }}
            />
        </Box>
    )
}

export default CultureDerivative;