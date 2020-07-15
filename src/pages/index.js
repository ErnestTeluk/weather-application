import React from "react";

import Localization from "hoc/localization/localization";
import Layout from "components/layout/layout";
import HomePage from "templates/homePage/homePage";

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
);

export default Localization(IndexPage);
