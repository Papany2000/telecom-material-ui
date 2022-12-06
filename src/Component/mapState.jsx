import uuid4 from "uuid4";

export let mapState = [
   {
      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
      defaultGeometry: [64.563675, 39.788681],
      properties: { balloonContentBody: 'текст', hintContent: 'Первомайская д54', iconCaption: '', iconContent: '1' },
      options: { preset: 'islands#redIcon' },
      id: uuid4()
   },
   {
      modules: ['geoObject.addon.balloon', , 'geoObject.addon.hint'],
      defaultGeometry: [55.729339, 37.455725],
      properties: { balloonContentBody: 'текст', hintContent: 'Ивана Франко, д 4', iconCaption: '', iconContent: '15' },
      options: { preset: 'islands#redIcon' },
      id: uuid4()

   },
   {
      modules: ['geoObject.addon.balloon', , 'geoObject.addon.hint'],
      defaultGeometry: [45.634209, 63.324311],
      properties: { balloonContentBody: 'текст', hintContent: 'Королева, д.36', iconCaption: '', iconContent: '15' },
      options: { preset: 'islands#redIcon' },
      id: uuid4()

   },
]