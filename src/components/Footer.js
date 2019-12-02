import React from 'react';
import styled from '@emotion/styled';

import GitHubLink from './GitHubLink';

export default function Footer() {
  return (
    <Container>
      <GitHubLink avatarSrc="images/avatar.png" username="allie" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
