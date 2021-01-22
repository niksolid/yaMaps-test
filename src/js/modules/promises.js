import { preloaderHide } from './loaded-map'
import { generateData } from './generate-data'

const jsonPath = '../assets/json/src_js_data_restorans.json'
let templatePlacemark
let templatePlacemarkActive

let myMap

const init = () => {
  myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 12,
    controls: ['zoomControl']
  })

  templatePlacemark = ymaps.templateLayoutFactory.createClass(
    `<div class="pokeball-container">
      <div class="pokeball">
      </div>
    </div>`
  )
  templatePlacemarkActive = ymaps.templateLayoutFactory.createClass(
    `<div class="pokeball-container">
      <div class="pokeball-shadow">
      </div>
      <div class="pokeball">
      </div>
    </div>`
  )

  console.log(templatePlacemark)

  const fetchPromice = new Promise((resolve, reject) => {
    console.log('Preparing data...')
    setTimeout(() => {
      resolve()
    }, 3000)
  }).then(() => fetch(jsonPath)).then((response) => {
    console.log(response.status)
    return response.json()
  })
    .then(data => {
      preloaderHide()
      generateData(data)
    })
    .catch((e) => console.error(e))
}

ymaps.ready(init)

export { myMap, templatePlacemark, templatePlacemarkActive }
