import React, { useState, useEffect } from "react";
import {Button, TextField, Box, Typography, Container } from '@material-ui/core';
import typography from 'src/theme/typography';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Helmet } from "react-helmet";
import {Formik} from 'formik';
import {post} from 'src/actions/requests';
const AddOffer = () => {
  const navigate =useNavigate();
  
  return (
    <>
    <Helmet>
        <title>Add offer</title>
    </Helmet>
    <Box 
      component="div"
      align='center'
      sx={{
        py:3,
        height: '100%'
      }}
      >
      <Container>
        <Formik
          initialValues = {{ 
            name: '',
            link: '' 
          }}
          onSubmit={(values)=>{
            post(values);
            navigate('../offer',{replace:true});
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          })=>(
      <form onSubmit={handleSubmit} >
      <Typography 
      color='textPrimary'
      variant='h3'
      >
        Add new offer
      </Typography>
     
        <div className="form-row">
          <TextField 
          variant="outlined"
          id="name"
          name="name"
          label="Offer Name"
          onChange={handleChange}
          value={values.name}
          sx={{
            my:1,
            height: '100%'
          }}
          />
          
        </div>
        <div className="form-row">
          <TextField
          variant="outlined"
          id="link"
          name="link"
          label="Offer Link"
          
          onChange={handleChange}
          value={values.link}
          sx={{
            my:1,
            height: '100%'
          }}
          />
        </div>
        <div>
          <Button 
          variant="contained" 
          color="primary"
          type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
      )}
        </Formik>
      </Container>
    </Box>
    </>
  );
};

export default AddOffer;
