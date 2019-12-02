import React from 'react';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <NavButton></NavButton>
      <Title>Advent of Code</Title>
      <NavButton></NavButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-shadow: 0 1px 2px 0 #99999988;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--red);
`;

const NavButton = styled.div`
  width: 5em;
`;

const Title = styled.span`
  font-family: 'Mountains of Christmas', cursive;
  font-weight: bold;
  font-size: 1.75rem;
  padding: 0.375em;
  user-select: none;
  color: white;

  b {
    color: var(--green);
  }
`;
