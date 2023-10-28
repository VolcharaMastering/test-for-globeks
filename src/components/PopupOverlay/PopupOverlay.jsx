/* eslint-disable react/prop-types */
import './PopupOverlay.scss';

export default function PopupOverlay({ onClose }) {
  return <div className="popup__overlay" onClick={onClose} />;
}
