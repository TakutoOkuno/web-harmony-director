import React, { useState, useEffect } from "react";
import styled from "styled-components";

const KeyWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

type KeyProps = {
  standardPitch?: number;
  midiKey: number;
};

const Key: React.FC<KeyProps> = ({ standardPitch = 442.0, midiKey }) => {
  const freq = standardPitch * Math.pow(2.0, (midiKey - 69.0) / 12.0);
  const [active, setActive] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode>();

  const buildOscillator = () => {
    const ctx = new AudioContext();
    const oscillatorNode = ctx.createOscillator();
    oscillatorNode.type = "triangle";
    oscillatorNode.frequency.value = freq;
    oscillatorNode.connect(ctx.destination);
    setOscillator(oscillatorNode);
  };

  useEffect(buildOscillator, [freq]);

  const play = () => {
    if (oscillator === undefined) return;
    if (!active) {
      start();
    } else {
      stop();
    }
  };

  const start = () => {
    if (oscillator === undefined || active) return;
    oscillator.start();
    setActive(true);
    console.log("started");
  };

  const stop = () => {
    if (oscillator === undefined || !active) return;
    oscillator.stop();
    setActive(false);
    buildOscillator();
    console.log("stopped");
  };

  return (
    <>
      <KeyWrapper onMouseDown={play} onMouseUp={stop} />
    </>
  );
};

export default Key;
