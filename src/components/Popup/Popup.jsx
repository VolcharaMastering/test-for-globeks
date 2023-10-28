
import { useSelector, useDispatch } from 'react-redux';
import PopupOverlay from '../PopupOverlay/PopupOverlay';
import { setChosenCard, togglePopup } from '../../store/slices/togglePopupSlice';

function Popup() {
    const dispatch = useDispatch();

    const handleClosePopup = () =>{
        dispatch(setChosenCard({}))
        dispatch(togglePopup(true))
    }
    
  const showCard = useSelector((state) => state.togglePopup.setChosenCard);
  return (
      <section className="popup">
        <button className='popup__close' />
        <PopupOverlay onClose={handleClosePopup} />
      <h1 className="popup__title">{showCard.name}</h1>
      <ul>
        <li className="popup__info-box">
          <p className="popup__label">Телефон:</p>
          <p className="popup__data">{showCard.phone}</p>
        </li>
        <li className="popup__info-box">
          <p className="popup__label">Почта:</p>
          <p className="popup__data">{showCard.email}</p>
        </li>
        <li className="popup__info-box">
          <p className="popup__label">Дата приема:</p>
          <p className="popup__data">{showCard.hire_date}</p>
        </li>
        <li className="popup__info-box">
          <p className="popup__label">Должность:</p>
          <p className="popup__data">{showCard.position_name}</p>
        </li>
        <li className="popup__info-box">
          <p className="popup__label">Подразделение:</p>
          <p className="popup__data">{showCard.department}</p>
        </li>
      </ul>
      <div className="popup__info-box__bottom">
      <p className="popup__label">Дополнительная информация:</p>
      <p className="popup__data">{showCard.address}</p>
      </div>
    </section>
  );
}

export default Popup;
