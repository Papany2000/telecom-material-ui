import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getOrganizations, postOrganization } from '../Api/ApiOrganization'
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2'

function OrganizationForm ({setOrganizations, handleClose}) {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: 'onBlur',
      });
      const onSubmit =  async (data) => {
        try {
            await postOrganization(data)
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
            setOrganizations((await getOrganizations()).data)
           handleClose()
          } catch(e) {
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
                  name="phone"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                      <TextField
                      autoFocus
                      margin='dense'
                      name="phone"
                      label="введите номер телефона"
                      type="phone"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value || ''}
                      error={!!errors.phone?.message}
                      helperText={errors.phone?.message}
                    />
                  )}
                 />
                 <Controller
                  control={control}
                  name="name"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                      <TextField
                      autoFocus
                      margin='dense'
                      name="name"
                      label="введите организацию"
                      type="name"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value || ''}
                      error={!!errors.name?.message}
                      helperText={errors.name?.message}
                    />
                  )}
                 />
                  <Controller
                  control={control}
                  name="email"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                      <TextField
                      autoFocus
                      margin='dense'
                      name="email"
                      label="Email Adress"
                      type="email"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value || ''}
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                    />
                  )}
                 />
                   <Controller
                  control={control}
                  name="manager"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="manager"
                    label="введите имя менеджера"
                    type="manager"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value || ''}
                     error={!!errors.manager?.message}
                     helperText={errors.manager?.message}
                    />
                  )}
                 />
                   <Controller
                  control={control}
                  name="managerWorkPhone"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="managerWorkPhone"
                    label="введите рабочий телефон менеджера"
                    type="managerWorkPhone"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value || ''}
                     error={!!errors.managerWorkPhone?.message}
                     helperText={errors.managerWorkPhone?.message}
                    />
                  )}
                 />
                   <Controller
                  control={control}
                  name="managerPersonalPhone"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="managerPersonalPhone"
                    label="введите личный телефон менеджера"
                    type="managerPersonalPhone"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value || ''}
                     error={!!errors.managerPersonalPhone?.message}
                     helperText={errors.managerPersonalPhone?.message}
                    />
                  )}
                 />
                   <Controller
                  control={control}
                  name="managerEmail"
                  rules={{ required: "обязательно к заполнению" }}
                  render = {({field}) => (
                    <TextField
                    autoFocus
                    margin='dense'
                    name="managerEmail"
                    label="введите почту менеджера"
                    type="managerEmail"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value || ''}
                     error={!!errors.managerEmail?.message}
                     helperText={errors.managerEmail?.message}
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
                     value={field.value || ''}
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
                    type="supportPhone"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                     value={field.value || ''}
                     error={!!errors.managerEmail?.message}
                     helperText={errors.managerEmail?.message}
                    />
                  )}
                 />
                 <Button type = "submit" fullWidth={true} variant="contained">Создать</Button>
                </form>
        
      </div>
     
    );
  }
  
  export default OrganizationForm;

  