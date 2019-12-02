import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';

export default function PageContainer({children}) {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
