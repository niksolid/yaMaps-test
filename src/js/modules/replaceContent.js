const content = document.querySelector('.content')
const contentName = content.querySelector('.content__name')
const contentAddress = content.querySelector('.content__address')
const contentPhone = content.querySelector('.content__phone')
const contentHours = content.querySelector('.content__hours')

const replaceContent = (item) => {
  console.log(item)
  contentName.textContent = item.name
  contentAddress.textContent = item.adress
  contentPhone.textContent = item.phone
  contentHours.textContent = item.hours
  content.classList.add('content--show')
}

export { replaceContent }
