import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalContent from './Content';

const modalRoot = document.getElementById('modal-root');
const appRoot = document.getElementById('root');

class Modal extends Component {
  el = document.createElement('div');

  static defaultProps = {
    className: null,
    title: null,
  };

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
  };

  closeModalOnClickOutSide = e => {
    const targetToClose = 'modal';
    const { closeModal } = this.props;
    const isClose = e.target.classList.contains(targetToClose);

    if (isClose) {
      closeModal();
    }
  };

  closeModalOnPressEsc = e => {
    const { closeModal } = this.props;
    const { keyCode } = e;
    const CODE_ESC = 27;

    if (keyCode === CODE_ESC) {
      closeModal();
    }
  };

  componentDidMount = () => {
    appRoot.style.filter = 'blur(5px)';

    modalRoot.appendChild(this.el);

    document.addEventListener('click', this.closeModalOnClickOutSide);
    document.addEventListener('keyup', this.closeModalOnPressEsc);
  };

  componentWillUnmount = () => {
    appRoot.style.filter = null;

    modalRoot.removeChild(this.el);

    document.removeEventListener('click', this.closeModalOnClickOutSide);
    document.removeEventListener('keyup', this.closeModalOnPressEsc);
  };

  render = () =>
    ReactDOM.createPortal(<ModalContent {...this.props} />, this.el);
}

export default Modal;
