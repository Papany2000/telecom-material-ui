import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useParams } from 'react-router-dom';
import { getMapStates } from './Api/ApiMapState';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import BasicModal from './Modal';
import Button from '@mui/material/Button';
import MapStateForm from './Form/mapStateForm'

const Maps = () => {

  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [mapStates, setMapStates] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getMapStates(routeParams)
      .then(
        (result) => {
          const mapStates = result.data
          setMapStates(mapStates);
          setLoading(false)
        })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams])
  const resultState = mapStates.map(el => ({
    id: el.id,
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    defaultGeometry: [el.coordinateX, el.coordinateY],
    properties:
    {
      balloonContentBody: el.text,
      hintContent: el.hit
    },
    options: { preset: el.icon, id: el.id },
    key: el.id
  }))
   

  return (
    <>
      <h1>География расположения объектов Телеком СП</h1>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <Button onClick={handleOpen}>Создайте метку</Button>
      <YMaps>
        <Map width={'100%'} height={800} defaultState={{
          center: [53.21, 38.17],
          zoom: 3,
          controls: ['zoomControl', 'fullscreenControl']
        }}
         modules={['control.ZoomControl', 'control.FullscreenControl', "templateLayoutFactory", "layout.ImageWithContent"]}
         >
          {resultState.map((el) => <Placemark  modules={[el.modules]} defaultGeometry={el.defaultGeometry} properties={el.properties} options={el.options} key={el.id} />)}
        </Map>
      </YMaps>
      
      
      <BasicModal open={open} handleClose={handleClose} text={'Создайте метку'} children={<MapStateForm setMapStates={setMapStates} handleClose={handleClose} />} />


    </>

  )
};
export default Maps;
