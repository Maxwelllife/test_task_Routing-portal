import { useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";
import { getAlbumsById } from "../../redux/user/user-operations";
import { getUsers } from "../../redux/user/user-selectors";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ isOpen, onClose, userId: id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            dispatch(getAlbumsById(id));
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen, dispatch, id]);

    const { albums } = useSelector(getUsers);

    return isOpen
        ? ReactDOM.createPortal(
              <div className={s.overlay}>
                  <div className={s.modal}>
                      <div className={s.header}>
                          <h2 className={s.title}>Albums</h2>
                          <button className={s.closeButton} onClick={onClose}>
                              X
                          </button>
                      </div>
                      <div className={s.body}>
                          {albums.map((album) => (
                              <div key={album.id} className={s.album}>
                                  <h3>{album.title}</h3>
                                  <p>User ID: {album.userId}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>,
              document.getElementById("modal-root")
          )
        : null;
};

export default Modal;
