import { Container, Grid } from "@mui/material";
import React from "react";
import Devices from "./Devices";
import Thermostat from "./Thermostat";

export default function Dashboard() {
  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Grid>
          <Grid item>
            <Thermostat />
          </Grid>
          <Grid item sx={{mt:4}}> 
            <Devices />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
