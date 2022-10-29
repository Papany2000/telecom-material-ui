import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getOrganizations } from '../Api/ApiOrganization'
import {Loader} from '../Loader'
import { ErrorMessage } from '../ErrorMessage';
import DataTable from '../DataTable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArticleIcon from '@mui/icons-material/Article';

function OrganizationPage () {
  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
 
  const [organizations, setOrganizations] = useState([]);
 
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
    {  field: 'supprotPhone', headerName: 'supporotPhone', width: 150, align: 'center' },
    
    {
      field: "date",
      headerName: "Договор",
      sortable: false,
      width: 70, 
      align: 'center',
      renderCell: (params) => {
          return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
            <ArticleIcon index={params.row.id} />
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
                  <DeleteForeverIcon index={params.row.id} />
               </div>
          );
       }
    }
  ]
    return (
     <div>
       {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      <h3 style={{width: '100%', textAlign: 'center'}}>Список организаций-партнёров Телеком СП</h3>
        <DataTable rows={rows} columns={columns}/>
      </div>
     
    );
  }
  
  export default OrganizationPage;

  