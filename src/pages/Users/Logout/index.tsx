import {
    AppBar,
    Box,
    Button,
    Grid,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from "@mui/icons-material/Close";
  
  export default function Logout() {
    const navigate = useNavigate();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" color="inherit" component="h1" sx={{fontSize:18,fontWeight:600,mt:1}}>
                  Admin
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ float: "right" }}
                >
                  <CloseIcon onClick={() => navigate("/edit")} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Button
              sx={{ m: 3, float: "right" }}
              onClick={() => navigate("/")} 
            >
              <PowerSettingsNewIcon />
              Logout
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }