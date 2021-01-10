// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import s from './App.module.css';

import ImageGallery from './component/ImageGallery';
import Searchbar from './component/Searchbar';
import Loader from './component/Loader';
import Modal from './component/Modal/';
import ImageErrorView from './component/ImageGallery/ImageErrorView';
import Button from './component/Button';

import galleryAPI from './services/imageGallery-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [imageName, setImageName] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = imageName => {
    galleryAPI.resetPage();

    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  const toggleModal = () => {
    setLargeImageURL('');
  };

  const largeImgModal = event => {
    const imagesClick = event.target;

    if (imagesClick.nodeName !== 'IMG') {
      return;
    }

    const largeURL = imagesClick.dataset.sourse;
    setLargeImageURL(largeURL);
  };

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setStatus(Status.PENDING);

    const scrollPage = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    galleryAPI
      .fetchGallery(imageName, page)

      .then(({ hits, total }) => {
        if (hits.length === 0) {
          toast.error('По вашему запросу нет нужного результата!');
        }
        setImages(i => [...i, ...hits]);
        setTotal(total);
        setIsLoading(false);
        setStatus(Status.RESOLVED);
        scrollPage();
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [imageName, page]);

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(page => page + 1);
  };

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === Status.IDLE && (
        <div className={s.text}>Введите текст для поиска</div>
      )}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <ImageErrorView message={error.message} />}
      {total > 1 && status === Status.RESOLVED && (
        <ImageGallery images={images} largeURL={largeImgModal} />
      )}
      {largeImageURL && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={imageName} />
        </Modal>
      )}
      {isLoading && <Loader />}

      {total > images.length && <Button loadMore={onLoadMore} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
