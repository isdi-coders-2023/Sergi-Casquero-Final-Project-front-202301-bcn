import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import useToken from "./hooks/useToken/useToken";

const App = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
};

export default App;
