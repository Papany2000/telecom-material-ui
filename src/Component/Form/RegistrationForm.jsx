import { Button, TextField} from '@mui/material';
import { Controller, useForm, useFormState } from "react-hook-form";
import { login } from '../Api/ApiAuth';
import { setAuthToken } from '../../utils/axiosClient';
import React from 'react';
import Box from '@mui/material/Box';

function RegistrationForm() {
  const { handleSubmit, control } = useForm()
  const onSubmit = async (data) => {
    const res = await login(data);
    localStorage.setItem('access_token', res.data.access_token);
    await setAuthToken(res.data.access_token);
    window.location.href = '/'
  }
  const { errors } = useFormState({
    control
  });

 


  return (

    <div style={{display: 'flex', justifyContent: 'space-evenly',}}>
     
       
        <Box mr={3} style={{width: '50%', borderRight: '25%', marginBottom: '10%'}}>
      
            <form onSubmit={handleSubmit(onSubmit)} style={{borderRight: '25%'}}>
              <Controller
                control={control}
                name="username"
                rules={{ required: "обязательно к заполнению" }}
                render={({ field }) => (
                  <TextField
                  style={{marginTop: '10%'}}
                    autoFocus
                    margin='dense'
                    name="username"
                    label="имя пользователя"
                    type="username"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value || ''}
                    error={!!errors.username?.message}
                    helperText={errors.username?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{ required: "обязательно к заполнению" }}
                render={({ field }) => (
                  <TextField
                    autoFocus
                    margin='dense'
                    name="password"
                    label="пароль"
                    type="password"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value || ''}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                  />
                )}
              />
              <Button type="submit" fullWidth={true} variant="contained">Авторизуйтесь</Button>
            </form>
            </Box>

    </div>

  );
}

export default RegistrationForm;