import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoadingShowing } = useAppSelector((state) => state.ui);

  return (
    <>
      <Header />
      <main>
        {isLoadingShowing && <Loader />}
        <Routes>
          <Route path="/" element={<Navigate replace to="/user/login" />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
