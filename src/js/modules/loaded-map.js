const preloaderHide = () => {
  const preloader = document.querySelector('.preloader')
  const shadow = document.querySelector('.shadow')

  preloader.style.display = 'none'
  shadow.style.display = 'none'
}

export { preloaderHide }
