import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import KeyBoard from './components/KeyBoard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-direction: column;
  height: 100vh;
  background-color: #444;
`

const Button = styled.button`
  margin-top: 20px;
  background-color: #d1d1d1;
`

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <KeyBoard />
      <Button>音を止める</Button>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
