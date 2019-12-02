import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route } from 'react-router-dom';

import Calendar from './pages/Calendar';

export default function App() {
  return (
    <FillViewport>
      <BrowserRouter>
        <Route path="/" component={Calendar} />
      </BrowserRouter>
    </FillViewport>
  );
}

const FillViewport = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
