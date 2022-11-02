import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getOrders, postOrder } from '../Api/APiOrder'
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2'


function OrderForm({ setOrders, handleClose }) {


  const {

    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    try {
      await postOrder(data)
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        position: 'top-start',
        title: 'info!',
        text: 'Успешно',
        timer: 1500
      })
      setOrders((await getOrders()).data)
      handleClose()
    } catch (e) {
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        position: 'top-end',
        title: 'Error!',
        text: 'Do you want to continue',
        timer: 1500
      })
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Controller
          control={control}
          name="contractId"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="contractId"
              label="введите id договора"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.contractId?.message}
              helperText={errors.contractId?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="number"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="number"
              label="введите номер заказа"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.number?.message}
              helperText={errors.number?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="description"
              label="введите описание заказа"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.description?.message}
              helperText={errors.description?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="type"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="type"
              label="введите тип"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.type?.message}
              helperText={errors.type?.message}
            />
          )}
        />
            <Controller
                  control={control}
                  name="supportEmail"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="supportEmail"
                    label="введите почту поддержки"
                    type="supportEmail"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value}
                     error={!!errors.supportEmail?.message}
                     helperText={errors.supportEmail?.message}
                    />
                  )}
                 />
                   <Controller
                  control={control}
                  name="supportPhone"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="supportPhone"
                    label="введите телефон поддержки"
                    type="text"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value}
                     error={!!errors.supportPhone?.message}
                     helperText={errors.supportPhone?.message}
                    />
                  )}
                 />
                  <Controller
                  control={control}
                  name="supportEmailTemplate"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="supportEmailTemplate"
                    label="введите краткое описание заказа"
                    type="text"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value}
                     error={!!errors.supportEmailTemplate?.message}
                     helperText={errors.supportEmailTemplate?.message}
                    />
                  )}
                 />
        <Button type="submit" fullWidth={true} variant="contained">Создать</Button>
      </form>

    </div>

  );
}

export default OrderForm