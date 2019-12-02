import React, { useState } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as GitHubSvg } from './svg/github.svg';

export default function GitHubLink({avatarSrc, username}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container loaded={loaded} href={`https://github.com/${username}`}>
      <GitHubVisual>
        <GitHubMark />
        <Slash>/</Slash>
        <Avatar
          src={avatarSrc}
          onLoad={() => setLoaded(true)}
        />
      </GitHubVisual>
      <GitHubTextual>
        <GitHubUrl>github.com/{username}</GitHubUrl>
      </GitHubTextual>
    </Container>
  );
}

const Container = styled.a`
  cursor: pointer;
  height: 3em;
  overflow: hidden;
  text-decoration: none;
  opacity: ${props => props.loaded ? '1' : '0'};
  transition: opacity 0.3s;

  &:hover, &:focus {
    & > div {
      transform: translateY(-3em);
    }
  }
`;

const GitHubVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  opacity: 0.8;
  transform: translateY(0);
  transition: transform 0.3s;
`;

const GitHubMark = styled(GitHubSvg)`
  width: 24px;
  height: 24px;
  user-select: none;
`;

const Slash = styled.span`
  color: var(--github);
  padding: 0 0.5em;
  user-select: none;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: none;
  user-select: none;
  pointer-events: none;
`;

const GitHubTextual = styled.div`
  color: var(--github);
  line-height: 1;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0);
  transition: transform 0.3s;
`;

const GitHubUrl = styled.span`
  font-size: 0.75rem;
`;
