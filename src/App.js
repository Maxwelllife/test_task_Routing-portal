import "modern-normalize/modern-normalize.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostPage = lazy(() => import("./pages/PostPage/PostPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:id/posts/" element={<PostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Provider>
    );
}

export default App;
