import s from "./HomePage.module.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/user/user-operations";
import { getUsers } from "../../redux/user/user-selectors";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

const HomePage = () => {
    const [userId, setUserId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { users } = useSelector(getUsers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleButtonClick = (id) => {
        setIsModalOpen(true);
        setUserId(id);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={s.container}>
            {users.map((user) => (
                <div key={user.id} className={s.card}>
                    <h4 className={s.name}>{user.name}</h4>
                    <p className={s.email}>{user.email}</p>
                    <p className={s.phone}>{user.phone}</p>
                    <p className={s.city}>{user.address.city}</p>
                    <div className={s.btnWraper}>
                        <Link to={`/${user.id}/posts`} className={s.postBtn}>
                            Posts
                        </Link>

                        <button
                            onClick={() => handleButtonClick(user.id)}
                            className={s.albumsBtn}
                        >
                            Albums
                        </button>
                    </div>
                </div>
            ))}
            {isModalOpen && (
                <Modal
                    userId={userId}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default HomePage;
