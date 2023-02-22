import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./PostPage.module.css";
import { getUsers } from "../../redux/user/user-selectors";
import { getPostsById } from "../../redux/user/user-operations";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams();
    const { posts } = useSelector(getUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsById(id));
    }, [dispatch, id]);

    return (
        <div className={s.postPage}>
            {posts &&
                posts.map((post, index) => (
                    <div className={s.card} key={index}>
                        <h2 className={s.title}>{post.title}</h2>
                        <p className={s.body}>{post.body}</p>
                    </div>
                ))}
        </div>
    );
};

export default PostPage;
