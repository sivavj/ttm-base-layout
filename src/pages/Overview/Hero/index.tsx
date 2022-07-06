import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import system from "../../../../public/static/image/avator/system.svg";
import server from "../../../../public/static/image/avator/server.svg";

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(50)};
  `
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(17)};
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      font-weight: bold;
      border-radius: 30px;
      text-transform: uppercase;
      display: inline-block;
      font-size: ${theme.typography.pxToRem(11)};
      padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
      margin-bottom: ${theme.spacing(2)};
  `
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #e5f7ff;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #dfebf6;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            The Things Mate
          </TypographyH1>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img src={system} alt="system" />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <Button
                    component={RouterLink}
                    to="/console/channels"
                    size="large"
                    variant="contained"
                  >
                    Application Server
                  </Button>
                </Box>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <TsAvatar>
                <img src={server} alt="server" />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                <Button
                    component={RouterLink}
                    to="/404"
                    size="large"
                    variant="contained"
                  >
                   Network Server
                  </Button>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
