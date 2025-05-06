import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import List from "./../components/common/List";
import Navbar from "./../components/common/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}
            >
                <List />

                {/* Contenido principal - 60% */}
                <Box
                    sx={{
                        flexBasis: '70%',
                        flexGrow: 1,
                        height: '100%',
                        overflowY: 'auto',
                        padding: 2
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
