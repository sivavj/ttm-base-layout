import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { Button, Container, Grid, TextField } from '@mui/material';
import OwnedApplication from './OwnedApplication'
import All from './All';
import { useNavigate } from 'react-router-dom'
import SampleForm from './SampleForm';

export type InvoiceStatus = 'pending' | 'completed' | 'draft' | 'progress'|undefined;

export interface Invoice {
  id: string;
  issuedDate: number;
  number: string;
  dueDate: number;
  clientName: string;
  clientAvatar: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  [key: string]: any;
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Channel() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAddChannel = () => {
    Navigate('/console/addChannel')
  }

  return (  
    <Container component="main" maxWidth="lg" sx={{ mt: 3 }} >
      <Box >
        <Grid container spacing={1}>
          <Grid item xl={8} lg={8} md={6} sm={5} xs={12} >
            <Box>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Owned Application" {...a11yProps(0)} />
                <Tab label="All(Admin)" {...a11yProps(1)} />
                <Tab label="Delete(Admin)" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Grid>

          <Grid item  sx={{ height: 20 }} xl={2} lg={2} md={3} sm={3}  xs={6} >
            <TextField label="search" size='small' />
          </Grid>

          <Grid item  xl={2} lg={2} md={3} sm={3} xs={6}>
            <Button sx={{height:'38px'}}  variant='outlined' onClick={handleAddChannel} size='medium'>+Add Channel</Button>
          </Grid>
        </Grid>
        <TabPanel value={value} index={0}>
          <OwnedApplication />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <All />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Delete /> */}
          <SampleForm invoices={[]}/>
        </TabPanel>
      </Box>
    </Container>
  );
}