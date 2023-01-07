import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOrders,removeOrder } from '../Api/APiOrder'
import {Loader} from '../Loader'
import { ErrorMessage } from '../ErrorMessage';
import DataTable from '../DataTable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BasicModal from '../Modal';
import Button from '@mui/material/Button';
import OrderForm from '../Form/OrderForm';




function OrderPage () {

  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
 
  useEffect(() => {

    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getOrders(routeParams.id)
      .then(
        (result) => {
          setOrders(result.data);
          setLoading(false)
        })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams.id])
  
  const rows = orders;
  const columns = [
    {  field: 'id', headerName: 'id', width: 200, align: 'center'},
    {  field: 'contractId', headerName: 'id договора', width: 200, align: 'center'},
    {  field: 'number', headerName: 'Номер заказа', width: 150, align: 'center' },
    {  field: 'description', headerName: 'Описание заказа', width: 200, align: 'center' },
    {  field: 'type', headerName: 'тип заказа', width: 100, align: 'center' },
    {  field: 'supportEmail', headerName: 'Почта поддержки', width: 190, align: 'center' },
    {  field: 'supportPhone', headerName: 'Телефон поддержки', width: 190, align: 'center' },
    {  field: 'supportEmailTemplate', headerName: 'Краткое содержание заказа', width: 500, align: 'center' },
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
                  await removeOrder(params.row.id)
                  setOrders((await getOrders()).data)
                }}/>
               </div>
          );
       }
    }
  ]
    return (
     <div>
   <Button onClick={handleOpen}>Добавить заказ</Button>
       {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      <h3 style={{width: '100%', textAlign: 'center'}}>Список заказовТелеком СП</h3>
        <DataTable rows={rows} columns={columns}/> 
       
        <BasicModal open={open} handleClose={handleClose} text={'Создайте организацию'} children={<OrderForm setOrders={setOrders} handleClose={handleClose} />}/>
      </div>
     
    );

    
     
  
  }
  
  export default OrderPage;