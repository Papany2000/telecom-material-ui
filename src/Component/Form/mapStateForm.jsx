import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getMapStates, postMapState } from '../Api/ApiMapState'
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2'


function MapStateForm({ setMapStates, handleClose }) {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async function(data) {
    try {
      await postMapState(data)
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
      console.log('set')
      const result = await getMapStates();
      setMapStates(result.data)
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

    <div style = {{borderRadius: '20px'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="coordinateX"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="coordinateX"
              label="введите координату икс"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              error={!!errors.coordinateX?.message}
              helperText={errors.coordinateX?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="coordinateY"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="coordinateY"
              label="введите координату игрек"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              error={!!errors.coordinateY?.message}
              helperText={errors.coordinateY?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="text"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="text"
              label="введите техт"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.text?.message}
              helperText={errors.text?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="hit"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="hit"
              label="введите хинт"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.hit?.message}
              helperText={errors.hit?.message}
            />
          )}
        />
         <Controller
          control={control}
          name="icon"
          rules={{ required: "обязательно к заполнению" }}
          render={({ field }) => (
            <TextField
              autoFocus
              margin='dense'
              name="icon"
              label="Введите тип метки"
              type="text"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.icon?.message}
              helperText={errors.icon?.message}
            />
          )}
        />
        <Button type="submit" fullWidth={true} variant="contained">Создать</Button>
      </form>

    </div>

  );
}

export default MapStateForm;

