import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import styled from "styled-components";

const KeyBoardWrapper = styled.section`
    display: flex;
    position: relative;
`

const KeyBoard: React.FC = () => <>
    <KeyBoardWrapper>
        <WhiteKey midiKey={60} />
        <BlackKey midiKey={61} />
        <WhiteKey midiKey={62} />
        <BlackKey midiKey={63} />
        <WhiteKey midiKey={64} />
        <WhiteKey midiKey={65} />
        <BlackKey midiKey={66} />
        <WhiteKey midiKey={67} />
        <BlackKey midiKey={68} />
        <WhiteKey midiKey={69} />
        <BlackKey midiKey={70} />
        <WhiteKey midiKey={71} />
        <WhiteKey midiKey={72} />
        <BlackKey midiKey={73} />
        <WhiteKey midiKey={74} />
    </KeyBoardWrapper>
</>

export default KeyBoard
