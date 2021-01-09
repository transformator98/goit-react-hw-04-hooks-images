const apiKey = '18773643-f1542c573d467a3c4fb890edb';

const api = {
  page: 1,

  fetchGallery(name) {
    const url = `https://pixabay.com/api/?q=${name}&page=${this.page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    return fetch(url).then(responce => {
      this.page += 1;

      if (responce.ok) {
        return responce.json();
      }
      return Promise.reject(new Error(`Нет картинок по запросу ${name}`));
    });
  },
  resetPage() {
    this.page = 1;
  },
};

export default api;
