import { Component } from "react";
import fetchHits from "./services/apiService";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import Spinner from "./components/Loader";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";

import styles from "./App.module.css";

const MODAL = {
  NONE: "none",
  OPEN: "open",
  // EDIT: "edit",
  // DELETE: "delete",
};

class App extends Component {
  state = {
    openedModal: MODAL.NONE,
    hits: [],
    currentPage: 1,
    searchQuery: "",
    largeImage: "",
    isLoading: false,
    smallImage: "",
    alt: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getDataApi();
    }
  }

  getDataApi = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    fetchHits(options)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  handleSearch = (searchQuery) => {
    if (this.state.searchQuery === searchQuery) return;
    this.setState({
      searchQuery: searchQuery,
      currentPage: 1,
      hits: [],
    });
  };

  openModal = (img) =>
    this.setState({
      openedModal: MODAL.OPEN,
      largeImage: img,
    });

  closeModal = () =>
    this.setState({
      openedModal: MODAL.NONE,
    });

  render() {
    const { openedModal, isLoading, hits } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearch} />
        {hits.length > 0 && (
          <ImageGallery hits={hits} onClick={this.openModal} />
        )}
        {isLoading && <Spinner />}
        {shouldRenderLoadMoreButton && <Button onClick={this.getDataApi} />}

        {openedModal === MODAL.OPEN && (
          <Modal onClose={this.closeModal} largeImage={this.state.largeImage}>
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
