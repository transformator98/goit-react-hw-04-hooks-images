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

    console.log('Обновление Стейта', Date.now());
    setStatus(Status.PENDING);
    // setImages([]);
    // setPage(1);

    galleryAPI
      .fetchGallery(imageName, page)

      .then(({ hits, total }) => {
        if (hits.length === 0) {
          toast.error('По вашему запросу нет нужного результата!');
        }

        // setImages(state => [...state, ...hits]);
        setImages([...images, ...hits]);
        setTotal(total);
        setIsLoading(false);
        setStatus(Status.RESOLVED);

        scrollPage();
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    console.log('images:', images);
  }, [imageName, page]);

  const scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

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
      {/* {total > images.length && !isLoading && <Button onClick={onLoadMore} />} */}
      {total > images.length && <Button onLoadMore={onLoadMore} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

// TODO rafactoring Component Start
// export default class App extends Component {
//   state = {
//     imageName: '',
//     largeImageURL: '',
//     images: [],
//     total: null,
//     page: 1,
//     error: null,
//     status: Status.IDLE,
//     isLoading: false,
//   };

//   handleFormSubmit = imageName => {
//     galleryAPI.resetPage();

//     this.setState({ imageName });
//   };

//   toggleModal = () => {
//     this.setState({ largeImageURL: '' });
//   };

//   largeImgModal = event => {
//     const imagesClick = event.target;

//     if (imagesClick.nodeName !== 'IMG') {
//       return;
//     }

//     const largeURL = imagesClick.dataset.sourse;
//     this.setState(({ largeImageURL }) => ({
//       largeImageURL: largeURL,
//     }));
//   };
// TODO
//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevState.imageName;
//     const nextName = this.state.imageName;

//     if (prevName !== nextName) {
//       this.setState({ status: Status.PENDING, images: [], page: 1 });

//       this.fetchApiGallery();
//     }
//   }

//   fetchApiGallery = () => {
//     const { page } = this.state;
//     const { imageName } = this.state;

//     galleryAPI
//       .fetchGallery(imageName, page)

//       .then(({ hits, total }) => {
//         if (hits.length === 0) {
//           toast.error('По вашему запросу нет нужного результата!');
//         }
//         this.setState({
//           images: [...this.state.images, ...hits],
//           total,
//           isLoading: false,
//           status: Status.RESOLVED,
//         });
//         this.scrollPage();
//       })
//       .catch(error => this.setState({ error, status: Status.REJECTED }));
//   };
//   scrollPage = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };
//   onLoadMore = () => {
//     this.setState({ isLoading: true });
//     this.fetchApiGallery();
//   };

//   render() {
//     const {
//       largeImageURL,
//       imageName,
//       images,
//       error,
//       status,
//       total,
//     } = this.state;

//     return (
//       <div className={s.app}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {status === 'idle' && (
//           <div className={s.text}>Введите текст для поиска</div>
//         )}
//         {status === 'pending' && <Loader />}
//         {status === 'rejected' && <ImageErrorView message={error.message} />}
//         {total > 1 && status === 'resolved' && (
//           <ImageGallery images={images} largeURL={this.largeImgModal} />
//         )}
//         {largeImageURL && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={imageName} />
//           </Modal>
//         )}
//         {this.state.isLoading && <Loader />}
//         {total > images.length && !this.state.isLoading && (
//           <Button onClick={this.onLoadMore} />
//         )}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
