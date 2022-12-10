import uuid4 from "uuid4";

export let mapState = [
   {
      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
      defaultGeometry: [64.563675, 39.788681],
      properties: { balloonContentBody: 'текст', hintContent: 'Северодвинск, Первомайская д54', iconCaption: '',  },
      options: { preset: 'islands#redIcon', id: 2 },
      id: uuid4()
   },
   {
      modules: ['geoObject.addon.balloon', , 'geoObject.addon.hint'],
      defaultGeometry: [55.729339, 37.455725],
      properties: { balloonContentBody: '<p>текст</p>', hintContent: 'Москва, Ивана Франко, д 4', iconCaption: '', },
      options: { preset: 'islands#redIcon' },
      id: uuid4()

   },
   {
      modules: ['geoObject.addon.balloon', , 'geoObject.addon.hint'],
      defaultGeometry: [45.634209, 63.324311],
      properties: { balloonContentBody: 'текст', hintContent: 'Байконур, Королева, д.36', iconCaption: '',  },
      options: { preset: 'islands#redIcon' },
      id: uuid4()

   },
]