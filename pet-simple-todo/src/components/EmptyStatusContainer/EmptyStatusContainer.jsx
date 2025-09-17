import React from 'react';
import emptyLight from "../../assets/img/empty-light.png"
import emptyDark from "../../assets/img/empty-dark.png"
import './EmptyStatusContainer.css'
import {useAppState} from "../../context/StateProvider.jsx";

const EmptyStatusContainer = () => {
  const {darkTheme} = useAppState()
  const currentImage = darkTheme
    ? emptyDark
    : emptyLight

  return (
    <div className='empty-status-container'>
      <img
        className="empty-status-container__image"
        src={currentImage }
        alt="Empty task list"
        width="221"
        height="174"
        loading="lazy"
      />
      <p className="empty-status-container__description">
        Empty...
      </p>
    </div>
  );
};

export default EmptyStatusContainer;
