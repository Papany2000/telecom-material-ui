import { Routes, Route } from 'react-router-dom';
import Navigation from './Component/Navigation';
import ContractPage from './Component/Pages/ContractPage';
import OrderPage from './Component/Pages/OrderPage';
import OrganizationPage from './Component/Pages/OrganizationPage';
import RegistrationForm from './Component/Form/RegistrationForm';
import Maps from './Component/maps';
import { setAuthToken } from './utils/axiosClient';
import FileUploadForm from './Component/Pages/ExselPage';
import FileExselForm from './Component/Pages/ExselPageOrganization';
import FileExselContractForm from './Component/Pages/ExselPageContract'
import OrderLayoutPage from './Component/Pages/orderLayoutPage';
import OrganizationLayoutPage from './Component/Pages/organizationLayoutPage';
import ContractLayoutPage from './Component/Pages/contractLayoutPage';


function App() {

  setAuthToken(localStorage.getItem('access_token'));

  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<OrganizationLayoutPage/>}>
          <Route index element={<OrganizationPage />} />
          <Route path="/exsel" element={<FileExselForm />} />
          </Route>
          <Route path="/contract" element={<ContractLayoutPage/>}>
            <Route index element={<ContractPage />} />
           <Route path="/contract/:id" element={<ContractPage />} />
           <Route path="/contract/exsel" element={<FileExselContractForm />} />
          </Route>
          <Route path="/order" element={<OrderLayoutPage />}>
             <Route index element={<OrderPage />} />
             <Route path="/orders/:id" element={<OrderPage />} />
             <Route path="/order/exsel" element={<FileUploadForm />} />
          </Route>
          <Route path="/maps" element={<Maps />} />
          <Route path="/login" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
