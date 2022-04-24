import { Box } from "@mui/system";


function ClientWall() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "1280px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "96px",
                paddingBottom: "125px",
            }}
        >
            <Box
                sx={{
                    height: "105px",
                    width: "246px",
                    backgroundImage: "url(/cases/client_wall/title@2x.png)",
                    backgroundSize: "contain",
                    marginBottom: "90px",
                }}
            />
            <Box
                sx={{
                    height: "864px",
                    width: "1650px",
                    backgroundImage: "url(/cases/client_wall/logo@2x.png)",
                    backgroundSize: "contain",
                }}
            />
        </Box>
    )
}

export default ClientWall;