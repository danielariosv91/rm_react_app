import { NavLink } from "react-router-dom"
import { Box, List, ListItem, ListItemText, ListItemButton } from './../../libraries/MUI'

export default function SidebarMenu() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </ListItemButton>
                    </ListItem><ListItem disablePadding>
                        <ListItemButton>
                            <NavLink to="/character" end>
                                Characters
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <NavLink to="/episodes" end>
                                Episodes
                            </NavLink>
                        </ListItemButton>
                    </ListItem> <ListItem disablePadding>
                        <ListItemButton>
                            <NavLink to="/locations" end>
                                Locations
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
