import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getContracts } from '../Api/ApiContract'
import {Loader} from '../Loader'
import { ErrorMessage } from '../ErrorMessage';
import DataTable from '../DataTable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArticleIcon from '@mui/icons-material/Article';
import BasicModal from '../Modal';
import Button from '@mui/material/Button';
import ContractForm from '../Form/ContractForm';
import { removeContract } from '../Api/ApiContract'
import Greeting from '../Greetimg';



function ContractPage () {

  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [contracts, setContracts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
 
  useEffect(() => {

    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getContracts(routeParams.id)
      .then(
        (result) => {
          setContracts(result.data);
          setLoading(false)
        })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams.id])
  
  const rows = contracts;
  const columns = [
    {  field: 'id', headerName: 'id', width: 220, align: 'center'},
    {  field: 'organizationId', headerName: 'id организации', width: 220, align: 'center'},
    {  field: 'number', headerName: 'Номер договора', width: 220, align: 'center' },
    {  field: 'description', headerName: 'Описание', width: 650, align: 'center' },
    {  field: 'fileUuid', headerName: 'Путь к файлу', width: 300, align: 'center' },
    {
      field: "date",
      headerName: "Заказ",
      sortable: false,
      width: 70, 
      align: 'center',
      renderCell: (params) => {
          return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
            <ArticleIcon index={params.row.id}  onClick={() => alert('ghbdtn')}/>
         </div>
          );
       }
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 70,
      align: 'center', 
      renderCell: (params) => {
          return (
              <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                  <DeleteForeverIcon index={params.row.id}    onClick = {async () => {
                 const res =  window.confirm('Вы уверены')
                 if(!res){return false}
                  await removeContract(params.row.id)
                  setContracts((await getContracts()).data)
                }}/>
               </div>
          );
       }
    }
  ]
    return (
     <div>
      <Greeting/>
       {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      <h3 style={{width: '100%', textAlign: 'center'}}>Список договоров с организациями-партнёрами Телеком СП</h3>
        <DataTable rows={rows} columns={columns}/> 
        <Button onClick={handleOpen}>Open modal</Button>
        <BasicModal open={open} handleClose={handleClose} text={'Создайте организацию'} children={<ContractForm setContracts={setContracts} handleClose={handleClose} />}/>
      </div>
     
    );

    
     
  
  }
  
  export default ContractPage;