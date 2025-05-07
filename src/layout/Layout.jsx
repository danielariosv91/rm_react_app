import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SidebarMenu from "../components/common/SidebarMenu";
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
                <SidebarMenu />

                {/* Contenido principal - 60% */}
                <Box
                    sx={{
                        flexBasis: '60%',
                        flexGrow: 1,
                        height: '100%',
                        overflowY: 'auto',
                        padding: 5
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
