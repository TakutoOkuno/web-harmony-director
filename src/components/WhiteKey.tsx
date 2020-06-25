import styled from "styled-components";
import Key, { KeyProps } from "./Key";
import React from "react";

const WhiteKeyWrapper = styled.div`
  width: 80px;
  height: 350px;
  border: solid 1px black;
  background-color: white;
`;

const WhiteKey: React.FC<KeyProps> = (props) => (
  <>
    <WhiteKeyWrapper>
      <Key {...props} />
    </WhiteKeyWrapper>
  </>
);

export default WhiteKey;
