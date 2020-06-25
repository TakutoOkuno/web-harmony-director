import Key, { KeyProps } from "./Key";
import React from "react";
import styled from "styled-components";

const BlackKeyWrapper = styled.div`
  width: 44px;
  height: 221px;
  background-color: #222;
  margin-right: -22px;
  margin-left: -22px;
  z-index: 2;
`;

const BlackKey: React.FC<KeyProps> = (props) => (
  <>
    <BlackKeyWrapper>
      <Key {...props} />
    </BlackKeyWrapper>
  </>
);

export default BlackKey;
