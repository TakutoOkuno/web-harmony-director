import React, { useCallback, useRef } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import styled from "styled-components";

const KeyBoardWrapper = styled.section`
  display: flex;
  position: relative;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #d1d1d1;
`;

const KeyBoard: React.FC = () => {
  let stop60 = useRef<(() => void) | null>(null);
  let stop61 = useRef<(() => void) | null>(null);
  let stop62 = useRef<(() => void) | null>(null);
  let stop63 = useRef<(() => void) | null>(null);
  let stop64 = useRef<(() => void) | null>(null);
  let stop65 = useRef<(() => void) | null>(null);
  let stop66 = useRef<(() => void) | null>(null);
  let stop67 = useRef<(() => void) | null>(null);
  let stop68 = useRef<(() => void) | null>(null);
  let stop69 = useRef<(() => void) | null>(null);
  let stop70 = useRef<(() => void) | null>(null);
  let stop71 = useRef<(() => void) | null>(null);
  let stop72 = useRef<(() => void) | null>(null);
  let stop73 = useRef<(() => void) | null>(null);
  let stop74 = useRef<(() => void) | null>(null);

  const stopAll = useCallback(() => {
    stop60.current && stop60.current();
    stop61.current && stop61.current();
    stop62.current && stop62.current();
    stop63.current && stop63.current();
    stop64.current && stop64.current();
    stop65.current && stop65.current();
    stop66.current && stop66.current();
    stop67.current && stop67.current();
    stop68.current && stop68.current();
    stop69.current && stop69.current();
    stop70.current && stop70.current();
    stop71.current && stop71.current();
    stop72.current && stop72.current();
    stop73.current && stop73.current();
    stop74.current && stop74.current();
  }, [])

  return (
    <>
      <h2>平均律</h2>
      <KeyBoardWrapper>
        <WhiteKey midiKey={60} stopRef={stop60} />
        <BlackKey midiKey={61} stopRef={stop61} />
        <WhiteKey midiKey={62} stopRef={stop62} />
        <BlackKey midiKey={63} stopRef={stop63} />
        <WhiteKey midiKey={64} stopRef={stop64} />
        <WhiteKey midiKey={65} stopRef={stop65} />
        <BlackKey midiKey={66} stopRef={stop66} />
        <WhiteKey midiKey={67} stopRef={stop67} />
        <BlackKey midiKey={68} stopRef={stop68} />
        <WhiteKey midiKey={69} stopRef={stop69} />
        <BlackKey midiKey={70} stopRef={stop70} />
        <WhiteKey midiKey={71} stopRef={stop71} />
        <WhiteKey midiKey={72} stopRef={stop72} />
        <BlackKey midiKey={73} stopRef={stop73} />
        <WhiteKey midiKey={74} stopRef={stop74} />
      </KeyBoardWrapper>
      <h2>純正律（ハ長調）</h2>
      <KeyBoardWrapper>
        <WhiteKey midiKey={60} cent={0} stopRef={stop60} />
        <BlackKey midiKey={61} cent={11.7} stopRef={stop61} />
        <WhiteKey midiKey={62} cent={3.9} stopRef={stop62} />
        <BlackKey midiKey={63} cent={15.6} stopRef={stop63} />
        <WhiteKey midiKey={64} cent={-13.7} stopRef={stop64} />
        <WhiteKey midiKey={65} cent={-2.0} stopRef={stop65} />
        <BlackKey midiKey={66} cent={-9.8} stopRef={stop66} />
        <WhiteKey midiKey={67} cent={2.0} stopRef={stop67} />
        <BlackKey midiKey={68} cent={13.7} stopRef={stop68} />
        <WhiteKey midiKey={69} cent={-15.6} stopRef={stop69} />
        <BlackKey midiKey={70} cent={17.9} stopRef={stop70} />
        <WhiteKey midiKey={71} cent={-11.7} stopRef={stop71} />
        <WhiteKey midiKey={72} cent={0} stopRef={stop72} />
        <BlackKey midiKey={73} cent={11.7} stopRef={stop73} />
        <WhiteKey midiKey={74} cent={3.9} stopRef={stop74} />
      </KeyBoardWrapper>
      <Button onClick={stopAll}>音を止める</Button>
    </>
  )
};

export default KeyBoard;
