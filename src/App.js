import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PrivateRoute, PublicRoute } from "./routes";
import { login, logout } from "./redux/auth/auth-slice";
import { auth, onAuthStateChanged } from "./services/firebaseConfig";

import Header from "./components/Header";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";

const AllPostsPage = lazy(() => import("./pages/AllPostsPage"));
const OnePostPage = lazy(() => import("./pages/OnePostPage"));
const EditPostPage = lazy(() => import("./pages/EditPostPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute />} />

          <Route path="/register" element={<PublicRoute />}>
            <Route index element={<RegisterPage />} />
          </Route>

          <Route path="/login" element={<PublicRoute />}>
            <Route index element={<LoginPage />} />
          </Route>

          <Route path="/posts" element={<PrivateRoute />}>
            <Route index element={<AllPostsPage />} />
            <Route path=":postId/edit" element={<EditPostPage />} />
            <Route path=":postId" element={<OnePostPage />} />
            <Route path="create" element={<EditPostPage />} />
          </Route>

          <Route path="*" element={<PrivateRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
