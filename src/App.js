import Navigation from './Component/Navigation';
import {Routes, Route} from 'react-router-dom';
import ContractPage from './Component/Pages/ContractPage';
import OrderPage from './Component/Pages/OrderPage';
import OrganizationPage from './Component/Pages/OrganizationPage';

function App() {
  return (
    <>
   <Navigation/>
   <div>
      <Routes>
       <Route path = '/' element = {<OrganizationPage/>} />
       <Route path = '/contract' element = {<ContractPage/>} />
       <Route path='/contract/:id' element={<ContractPage />} />
       <Route path = '/order' element = {<OrderPage/>} />
       <Route path='/orders/:id' element={<OrderPage />} />
        </Routes>
      
    </div>
    </>
  );
}

export default App;
