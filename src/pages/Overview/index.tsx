import { Box, Container, Card } from '@mui/material';

import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/LogoSign'
import Hero from './Hero';


const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {

  return (
    <OverviewWrapper>
      <Helmet>
        <title>TTM - Overview</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
