import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, DialogContentText } from '@mui/material';
import { Controller, useForm, useFormState } from "react-hook-form";



function Navigation() {
  const { handleSubmit, control } = useForm()
  const onSubmit = (data) => console.log(data)
  const { errors } = useFormState({
    control
  });
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Телеком СП
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            <Typography><NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }} >Организации</NavLink></Typography>
            <Typography><NavLink to="/contract" style={{ color: 'inherit', textDecoration: 'none' }}>Договора</NavLink></Typography>
            <Typography><NavLink to="/order" style={{ color: 'inherit', textDecoration: 'none' }}>Заказы</NavLink></Typography>
            <Typography><NavLink to="/maps" style={{ color: 'inherit', textDecoration: 'none' }}>Карта</NavLink></Typography>
          </Box>

          <Box mr={3}>
            <Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log in</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title" >Log in</DialogTitle>
              <DialogContent>
                <DialogContentText>Введите пароль и логин</DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    control={control}
                    name="email"
                    rules={{ required: "обязательно к заполнению" }}
                    render={({ field }) => (
                      <TextField
                        autoFocus
                        margin='dense'
                        name="email"
                        label="Email Adress"
                        type="email"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}
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
                        label="Password"
                        type="password"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                  <Button type="submit" fullWidth={true} variant="contained">Войти</Button>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">Cansel</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;

