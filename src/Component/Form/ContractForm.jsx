import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getContracts, postContract } from '../Api/ApiContract'
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2'

function ContractForm({ setContracts, handleClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    try {
      await postContract(data)
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
      setContracts((await getContracts()).data)
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
          name="organizationId"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="organizationId"
              label="введите id организации"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.organizationId?.message}
              helperText={errors.organizationId?.message}
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
              label="введите номер договора"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
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
              label="введите описание"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.description?.message}
              helperText={errors.description?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="fileUuid"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="fileUuid"
              label="введите путь к файлу"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.fileUuid?.message}
              helperText={errors.fileUuid?.message}
            />
          )}
        />
        <Button type="submit" fullWidth={true} variant="contained">Создать</Button>
      </form>

    </div>

  );
}

export default ContractForm;