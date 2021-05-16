import React from 'react';
import { useState } from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    Select,
    MenuItem,
    InputLabel,
    Grid
  } from '@material-ui/core';

function CustomRangeDatePicker(){
    const [valu, setValu] = useState([null, null]);


return(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
              startText="Created from"
              endText="Created to"
              value={valu}
              onChange={(newValu) => {
              setValu(newValu);
              }}
              renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} variant="standard" />
                <Box sx={{ mx: 2 }}> - </Box>
                <TextField {...endProps} variant="standard" />
              </React.Fragment>
              )}
            />
    </LocalizationProvider>

);


}

export default CustomRangeDatePicker;