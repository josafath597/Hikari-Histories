import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import start from '../../assets/shooting-star.png'

export const Header = () => {

    const navigation = useNavigate()
  
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={start}
                        alt="LOGO"
                        style={{ width: '50px', height: '50px', marginLeft: '1rem', marginRight: '1rem' }}
                    />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                        }}
                    >
                        HIKARI-HISTORIES
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
