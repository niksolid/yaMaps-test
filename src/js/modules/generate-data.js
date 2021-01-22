import {
  myMap,
  templatePlacemark,
  templatePlacemarkActive
} from './promises'
import {
  replaceContent
} from './replaceContent'

const shopPlacemarks = []
let activePlacemarkNum = null

const generateData = (data) => {
  data.array.forEach((item, i) => {
    console.log(item.position)
    shopPlacemarks[i] = new ymaps.Placemark(item.position, {
      hintContent: `${item.name} - Адрес: ${item.adress}`
    }, {
      iconLayout: templatePlacemark,
      iconShape: {
        type: 'Circle',
        coordinates: [28, 28],
        radius: 20
      },
      iconImageOffset: [-28, -28]
    })

    myMap.geoObjects.add(shopPlacemarks[i])
    shopPlacemarks[i].events.add('click', (evt) => {
      const target = evt.get('target')
      if (target === shopPlacemarks[activePlacemarkNum]) {
        return
      }
      replaceContent(item)
      shopPlacemarks[i].options.set('iconLayout', templatePlacemarkActive)
      if (activePlacemarkNum !== null) {
        shopPlacemarks[activePlacemarkNum].options.set('iconLayout', templatePlacemark)
      } else {
        // showInfo() - пока не написана
      }
      activePlacemarkNum = i
    })
  })

  console.log(myMap.geoObjects)
  console.log(shopPlacemarks)
}

export {
  generateData
}
