import React from 'react';
import ReactDom from 'react-dom';
import './loader.css';
import './loadingModal.scss';

type Props = {
  active: boolean,
};

function LoadingModal({ active }: Props) {
  const portal = document.getElementById('portal') as HTMLElement;

  const ModalElement = (
    <div className="loadingModal">
      <div className="loadingio-spinner-pulse-bfuqd3yy0n4">
        <div className="ldio-1rql3q3l00q">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
  return active ? ReactDom.createPortal(ModalElement, portal) : null;
}

export default LoadingModal;