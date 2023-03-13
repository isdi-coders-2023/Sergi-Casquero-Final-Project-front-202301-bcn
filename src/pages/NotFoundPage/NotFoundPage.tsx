import NotFound from "../../components/NotFound/NotFound";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <NotFound />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
