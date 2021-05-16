import OfferListResult from 'src/components/offers/OffersListResult';
import OffersListToolbar from 'src/components/offers/OffersListToolbar';
import offers from 'src/__mocks__/offers';
import {Box, 
  Container
} from '@material-ui/core';



const OffersPage = () => (
 <Box
 sx={{
   backgroundColor: 'background.default',
   minHeight: '100%',
   py: 3
 }}
 >
   <Container maxWidth={false}>
     <OffersListToolbar 
     sx={{
       py:1
     }}
     ></OffersListToolbar>
     <OfferListResult offerlist={offers}/>
   </Container>
 </Box>
);

export default OffersPage;
