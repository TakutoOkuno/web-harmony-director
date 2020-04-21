import styled from "styled-components";
import Key from "./Key";
import React from "react";

const WhiteKeyWrapper = styled.div`
  width: 80px;
  height: 350px;
  border: solid 1px black;
  background-color: white;
`;

const WhiteKey: React.FC<{ midiKey: number }> = ({ midiKey }) => (
  <>
    <WhiteKeyWrapper>
      <Key midiKey={midiKey} />
    </WhiteKeyWrapper>
  </>
);

export default WhiteKey;
