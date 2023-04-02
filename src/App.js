import { Routes, Route } from 'react-router-dom';
import Navigation from './Component/Navigation';
import ContractPage from './Component/Pages/ContractPage';
import OrderPage from './Component/Pages/OrderPage';
import OrganizationPage from './Component/Pages/OrganizationPage';
import RegistrationForm from './Component/Form/RegistrationForm';
import Maps from './Component/maps';
import { setAuthToken } from './utils/axiosClient';
import FileUploadForm from './Component/Pages/ExselPage'


function App() {
  
  setAuthToken(localStorage.getItem('access_token'));

  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<OrganizationPage />} />
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/contract/:id" element={<ContractPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders/:id" element={<OrderPage />} />
          <Route path="/exsel" element={<FileUploadForm/>} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/login" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
