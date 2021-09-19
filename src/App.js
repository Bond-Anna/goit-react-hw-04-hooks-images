import { Component } from 'react';
import { Searchbar } from './components/searchbar/Searchbar.jsx';
import { Fetch } from './components/services.jsx';
import { ImageGallery } from './components/gallery/gallery';
import { Spinner } from './components/Spinner/spinner';
import { Modal } from './components/modal/modal';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    selectedImg: null,
    loading: false,
    error: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name || prevState.page !== page) {
      this.setState({ loading: true });
      Fetch({ name, page })
        .then(({ hits }) => {
          if (hits.length > 0) {
            this.setState(prevState => ({
              pictures: [...prevState.pictures, ...hits],
              error: false,
            }));
          } else {
            this.setState({ error: true });
          }
        })
        .catch(() => this.setState({ error: true }))
        .finally(() => this.setState({ loading: false }));
    }
    if (page !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSearchbarSubmit = name => {
    this.setState({ name, pictures: [], page: 1 });
  };
  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  handleSelectImg = selectedImg => {
    this.setState({ selectedImg, showModal: true });
  };

  render() {
    const { pictures, loading, error, name, selectedImg } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {error && <h1 className="error">There are no {name} pictures :( </h1>}
        {loading && <Spinner />}

        <ImageGallery pictures={pictures} onSelect={this.handleSelectImg} />
        {pictures.length > 0 && (
          <button
            type="button"
            className="Button"
            onClick={this.handleLoadMoreClick}
          >
            Load more
          </button>
        )}
        {this.state.showModal && (
          <Modal
            selectedPicture={selectedImg}
            onCloseModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
