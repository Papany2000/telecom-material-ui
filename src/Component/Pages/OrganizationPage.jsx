import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import { getOrganizations } from '../Api/ApiOrganization'
import {Loader} from '../Loader'
import { ErrorMessage } from '../ErrorMessage';
import DataTable from '../DataTable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArticleIcon from '@mui/icons-material/Article';
import BasicModal from '../Modal';
import Button from '@mui/material/Button';
import OrganizationForm from '../Form/OrganizationForm';
import { removeOrganization } from '../Api/ApiOrganization'
import Greeting from '../Greetimg';

function OrganizationPage () {
  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [organizations, setOrganizations] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
 
  useEffect(() => {

    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getOrganizations(routeParams.id)
      .then(
        (result) => {
          setOrganizations(result.data);
          setLoading(false)
        })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams.id])
  
  const rows = organizations;
  const columns = [
    {  field: 'id', headerName: 'ID', width: 220, align: 'center'},
    {  field: 'name', headerName: 'name', width: 150, align: 'center' },
    {  field: 'phone', headerName: 'phone', width: 120, align: 'center' },
    {  field: 'email', headerName: 'email', width: 190, align: 'center' },
    {  field: 'manager', headerName: 'manager', width: 150, align: 'center' },
    {  field: 'managerWorkPhone', headerName: 'managerWorkPhone', width: 150, align: 'center'},
    {  field: 'managerPersonalPhone', headerName: 'managerPersonalPhone', width: 170, align: 'center' },
    {  field: 'managerEmail', headerName: 'managerEmail', width: 190, align: 'center' },
    {  field: 'supportEmail', headerName: 'supportEmail', width: 190, align: 'center' },
    {  field: 'supportPhone', headerName: 'supportPhone', width: 120, align: 'center' },
    
    {
      field: "date",
      headerName: "Договор",
      sortable: false,
      width: 70, 
      align: 'center',
      renderCell: (params) => {
          return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                  <span>
            <Link to={`/contract/${params.row.id}`}>
            <ArticleIcon index={params.row.id}/>
            </Link>
          </span>
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
                  await removeOrganization(params.row.id)
                  setOrganizations((await getOrganizations()).data)
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
      <h3 style={{width: '100%', textAlign: 'center'}}>Список организаций-партнёров Телеком СП</h3>
        <DataTable rows={rows} columns={columns}/> 
        <Button onClick={handleOpen}>Open modal</Button>
        <BasicModal open={open} handleClose={handleClose} text={'Создайте организацию'} children={<OrganizationForm setOrganizations={setOrganizations} handleClose={handleClose} />}/>
      </div>
     
    );
  }
  
  export default OrganizationPage;

  