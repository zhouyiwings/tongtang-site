import { Box } from "@mui/system";
import { useState } from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Box7 from "./Box7";
import Box8 from "./Box8";
import Thumbnail from "./Thumbnail";

function WholeBox() {
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);

    const onClickMore = (index: number) => {
        setSelectedBoxIndex(index);
    }

    const onCloseBox = () => {
        setSelectedBoxIndex(-1);
    }
    return (
        <Box
            sx={{
                width: "100vw",
                height: "1425px",
                padding: "0 64px",
                paddingTop: "96px",
                paddingBottom: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "1920px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        height: "106px",
                        width: "212px",
                        marginBottom: "50px",
                    }}
                >
                    <img style={{width: "100%", height: "100%", backgroundSize: "contain"}} src="/cases/whole_box/title@2x.png" />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "576px",
                            marginRight: "32px",
                        }}
                    >
                        <Thumbnail onClickMore={onClickMore} index={0} width="576px" height="316px" marginBottom="32px" />
                        <Thumbnail onClickMore={onClickMore} index={1} width="576px" height="334px" marginBottom="32px" />
                        <Thumbnail onClickMore={onClickMore} index={2} width="576px" height="360px" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "576px",
                            marginRight: "32px",
                        }}
                    >
                        <Thumbnail onClickMore={onClickMore} index={3} width="576px" height="430px" marginBottom="32px" />
                        <Thumbnail onClickMore={onClickMore} index={4} width="576px" height="280px" marginBottom="32px" />
                        <Thumbnail onClickMore={onClickMore} index={5} width="576px" height="300px" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "576px",
                        }}
                    >
                        <Thumbnail onClickMore={onClickMore} index={6} width="576px" height="576px" marginBottom="32px" />
                        <Thumbnail onClickMore={onClickMore} index={7} width="576px" height="466px" />
                    </Box>
                </Box>
            </Box>
            {selectedBoxIndex === 0 ? <Box1 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 1 ? <Box2 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 2 ? <Box3 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 3 ? <Box4 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 4 ? <Box5 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 5 ? <Box6 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 6 ? <Box7 closeBox={onCloseBox} /> : null}
            {selectedBoxIndex === 7 ? <Box8 closeBox={onCloseBox} /> : null}
        </Box>
    )
}

export default WholeBox;