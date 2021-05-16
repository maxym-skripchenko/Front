import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import {patchpreland} from 'src/actions/requests';


const Editpreland = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Add preland</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Card sx={{pl:7, pr:7, pt:1, pb:1}}>
            <CardContent>
          <Formik
            initialValues={{
              name: '',
              showing: '',
              uniques: '',
              unique: '',
              postback: ''
            }}
            onSubmit={(values) => {
                console.log(values);
                patchpreland(values);
                navigate('../prelands', { replace: true });
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
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    align="center"
                  >
                    Add preland
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    input data
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Preland name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  defaultValue={values.name=localStorage.getItem("name")}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Showing"
                  margin="normal"
                  name="showing"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  defaultValue={values.showing=localStorage.getItem("showing")}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Uniques"
                  margin="normal"
                  name="uniques"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  defaultValue={values.uniques=localStorage.getItem("uniques")}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Unique"
                  margin="normal"
                  name="unique"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  defaultValue={values.unique=localStorage.getItem("unique")}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Postback"
                  margin="normal"
                  name="postback"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  defaultValue={values.postback=localStorage.getItem("postback")}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
          </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Editpreland;