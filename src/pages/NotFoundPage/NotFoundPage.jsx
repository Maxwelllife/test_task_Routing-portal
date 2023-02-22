import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={s.container}>
            <h2>Oops... nothing to show</h2>
            <Link to="/">home page</Link>
        </div>
    );
};

export default NotFoundPage;
