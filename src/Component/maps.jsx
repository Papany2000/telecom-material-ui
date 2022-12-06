import React from 'react'
import {YMaps, Map, Placemark } from 'react-yandex-maps';
import { mapState } from './mapState'
import uuid4 from "uuid4";

const Maps = () => {

  

  return (
    <>
      <h1>Работа с яндекс картами</h1>
      <YMaps>
      <Map width={'100wn'} height={'100vh'} defaultState={{
        center: [53.21, 38.17],
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
      }} modules={['control.ZoomControl', 'control.FullscreenControl', "templateLayoutFactory", "layout.ImageWithContent"]}>
        {mapState.map((el) => <Placemark modules={[el.modules]} defaultGeometry={el.defaultGeometry} properties={el.properties} options={el.options} onClick ={function(){''}} key={el.id} />)}
      </Map>
      </YMaps>
    </>

  )
};
export default Maps;
