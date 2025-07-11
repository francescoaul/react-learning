import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function MUICounter() {
    const [counter, setCounter] = useState(0)

    return (
        <Box
            sx={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
                gap: 2,
            }}
        >

            <Typography variant="h4" component="div">
                Count: {counter}
            </Typography>

            <Box sx={{display: "flex", gap: 2}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setCounter(c => c + 1)}
                >
                    Increment

                </Button>

                <Button

                variant="outlined"
                color="secondary"
                onClick={() => setCounter(0)}
                >
                    Reset

                </Button>

            </Box>

        </Box>
    )
}