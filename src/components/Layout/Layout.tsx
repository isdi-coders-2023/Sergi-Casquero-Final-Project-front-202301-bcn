import { Outlet } from "react-router-dom";
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
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
