import {
  Box,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  Grid
} from '@material-ui/core';
import { Formik } from 'formik';
import { useState } from 'react';
import React from 'react';
import CustomRangeDatePicker from 'src/components/CustomRangeDatePicker';


function OffersListToolbar(props){
const [type, setType] = useState(1);
const [visible, setVisble] = useState('none');
const handleChange = (event) => {
  setType(event.target.value);
  if (event.target.value == 5) 
  {
    setVisble('block');
  } else {
    setVisble('none');
  }
};
return(
  <Box {...props}>
    <Box sx={{ mt: 3 }}>
      <Formik>
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            alignItems="center"
          >
          <Grid item xs={8} display='flex'>
            <Box sx={{ maxWidth: 500 }}>
              <InputLabel id="label">Filter</InputLabel>
              <Select
                labelId="label"
                id="select"
                value={type}
                onChange={handleChange}
              >
                <MenuItem value={1}>This month</MenuItem>
                <MenuItem value={2}>Today</MenuItem>
                <MenuItem value={3}>Last week</MenuItem>
                <MenuItem value={4}>Yesterday</MenuItem>
                <MenuItem value={5}>Period</MenuItem>
              </Select>
            </Box>
            <Box sx={{ ml: 3}} display={visible}>
              <CustomRangeDatePicker />
            </Box>
          </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="flex-end"
              >
                <Button
                  color="primary"
                  variant="contained"
                  href="./addoffer"
                >
                Add offer
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Formik>
    </Box>
  </Box>
);
}
export default OffersListToolbar;