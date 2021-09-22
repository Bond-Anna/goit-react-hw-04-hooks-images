import { useEffect, useState } from 'react';
import { Searchbar } from './components/searchbar/Searchbar.jsx';
import { Fetch } from './components/services.jsx';
import { ImageGallery } from './components/gallery/gallery';
import { Spinner } from './components/Spinner/spinner';
import { Modal } from './components/modal/modal';

export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    Fetch({ name, page })
      .then(({ hits }) => {
        if (hits.length > 0) {
          setPictures(prevPictures => [...prevPictures, ...hits]);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    if (page !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [name, page]);

  const handleSearchbarSubmit = name => {
    setName(name);
    setPictures([]);
    setPage(1);
  };

  const handleSelectImg = selectedImg => {
    setSelectedImg(selectedImg);
    setShowModal(true);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchbarSubmit} />
      {error && <h1 className="error">There are no {name} pictures :( </h1>}
      {loading && <Spinner />}

      <ImageGallery pictures={pictures} onSelect={handleSelectImg} />
      {pictures.length > 0 && (
        <button type="button" className="Button" onClick={handleLoadMoreClick}>
          Load more
        </button>
      )}
      {showModal && (
        <Modal selectedPicture={selectedImg} onCloseModal={toggleModal} />
      )}
    </div>
  );
};
