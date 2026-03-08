const mainData = () => {
  const renderAnimeList = (array, genres) => {
    console.log(array)
    console.log(genres)
  }

  const renderTopAnime = (array) => {
    const wrapper = document.querySelector('.filter__gallery')

    wrapper.innerHTML = ''

    array.forEach((item) => {
      wrapper.insertAdjacentHTML('afterbegin', `
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
          <div class="ep">${item.rating || 0} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views || 0}</div>
          <h5><a href="/anime-details.html">${item.title}</a></h5>
        </div>
      `)
    })

    wrapper.querySelectorAll('.set-bg').forEach((elem) => {
      elem.style.backgroundImage = `url(${elem.dataset.setbg})` 
    })
  }

  fetch('https://anime-aa529-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set()

      const sortedArray = data.anime.filter((item) => item.views !== undefined)

      sortedArray.sort((a, b) => b.views - a.views)

      renderTopAnime(sortedArray.slice(0, 5))

      data.anime.forEach((item) => {
        if (item.genre) {
          genres.add(item.genre)
        }
      })

      renderAnimeList(data.anime, genres)
    })
}

mainData()