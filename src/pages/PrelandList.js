import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PrelandListResults from 'src/components/preland/PrelandListResults';
import PrelandListToolbar from 'src/components/preland/PrelandListToolbar';
import prelands from 'src/__mocks__/prelands';

const PrelandList = () => (
  <>
    <Helmet>
      <title>Prelands</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PrelandListToolbar />
        <Box sx={{ pt: 3 }}>
          <PrelandListResults prelands={prelands} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PrelandList;
