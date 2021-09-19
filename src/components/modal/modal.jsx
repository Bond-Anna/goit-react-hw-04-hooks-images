import { Component } from 'react';
import css from './modal.module.css';
export class Modal extends Component {
  state = { showModal: true };
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleBackdropClick);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleBackdropClick = e => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={this.props.selectedPicture} alt="" />
        </div>
      </div>
    );
  }
}
