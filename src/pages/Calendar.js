import React, { useState } from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';

export default function Calendar() {
  const [days] = useState([
    'The Tyranny of the Rocket Equation',
  ].concat((new Array(31).fill(null))).slice(0, 31));

  return (
    <PageContainer>
      <Grid>
        {days.map((day, index) => (
          <DayContainer disabled={!day}>
            <Day disabled={!day}>
              <DayNumber disabled={!day}>{index + 1}</DayNumber>
              {day && (
                <DayTitle>{day}</DayTitle>
              )}
            </Day>
          </DayContainer>
        ))}
      </Grid>
    </PageContainer>
  );
}

const Grid = styled.div`
  width: 100%;
  padding: 1em;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const DayContainer = styled.div`
  height: 20%;
  flex: 0 0 14.285%;
  padding: 0.5em;
  ${props => !props.disabled && `
    transition: padding 0.2s;

    &:hover, &:focus {
      padding: 0.25em;
    }
  `}
`;

const Day = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.25em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.disabled ? `
    border: 0.125em dashed var(--light-grey);
    opacity: 0.5;
  ` : `
    background-color: var(--red-light);
    cursor: pointer;
    border: 0.125em solid var(--red);
  `}
`;

const DayNumber = styled.span`
  font-weight: bold;
  font-size: 2rem;
  user-select: none;
  color: ${props => props.disabled ? 'var(--light-grey)' : 'var(--red)'};
`;

const DayTitle = styled.span`
  font-weight: bold;
  font-size: 1rem;
  user-select: none;
  max-width: 70%;
  padding: 0.25em;
  text-align: right;
  align-self: flex-end;
  color: ${props => props.disabled ? 'var(--light-grey)' : 'var(--green)'};
`;
