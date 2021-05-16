import MainLayout from 'src/components/MainLayout';
import PrelandList from 'src/pages/PrelandList';
import Login from 'src/pages/Login';
import Addpreland from 'src/pages/Addpreland';
import OffersPage from 'src/pages/OffersPage';
import EditOffer from 'src/pages/EditOffer';
import Editpreland from 'src/pages/Editpreland';
import AddOffer from 'src/pages/AddOffer';
import DashboardLayout from 'src/components/DashboardLayout';
const routes = [
  {
    path: '',
    element:<Login/>

  },
  {

    
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'prelands', element: <PrelandList /> },
      { path: 'addpreland', element: <Addpreland /> },
      { path: 'offer', element:<OffersPage/>},
      { path: 'addoffer', element:<AddOffer/>},
      { path: 'editoffer', element:<EditOffer/>},
      { path: 'editpreland', element:<Editpreland />}

    ]
  },
  {

    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> }
    ]
  }
];

export default routes;
