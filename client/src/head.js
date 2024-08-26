import { Helmet } from "react-helmet";

export const Head = ({pageTitle = ''}) => {
  return (
    <Helmet>
      <title>{pageTitle} | Hayroo</title>
    </Helmet>
  );
};
