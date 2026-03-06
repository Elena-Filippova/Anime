const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalCloseBtn = modal.querySelector('.search-close-switch')
const searchInput = document.getElementById('search-input')

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    console.log(event.target.value)
  })
}