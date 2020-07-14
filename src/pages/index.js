import React from "react";
import styled from "styled-components";

import Localization from "hoc/localization/localization";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const IndexPage = () => (
  <>
    <StyledDiv>Welcome to Wheather App</StyledDiv>
  </>
);

export default Localization(IndexPage);
