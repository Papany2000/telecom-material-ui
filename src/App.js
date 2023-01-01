import Navigation from './Component/Navigation';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import ContractPage from './Component/Pages/ContractPage';
import OrderPage from './Component/Pages/OrderPage';
import OrganizationPage from './Component/Pages/OrganizationPage';
import Maps from './Component/maps.jsx'
import { defaultAxiosOptions } from './config';
export const axiosClient = axios.create(defaultAxiosOptions);


export function setAuthToken(token) {
  axiosClient.defaults.headers.common['Authorization'] = '';
  delete axiosClient.defaults.headers.common['Authorization'];

  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('axios.defaults.headers', axiosClient.defaults.headers)
  }
}
setAuthToken(localStorage.getItem('access_token'))

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path='/' element={<OrganizationPage />} />
          <Route path='/contract' element={<ContractPage />} />
          <Route path='/contract/:id' element={<ContractPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/orders/:id' element={<OrderPage />} />
          <Route path='/maps' element={<Maps />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
