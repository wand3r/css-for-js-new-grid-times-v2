import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const MainStory = ({ id, title, image, location, abstract, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <a href={`/story/${id}`}>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
      </a>
      <Abstract className="multi-line-truncate">
        <Location>{location}</Location> — {abstract}
      </Abstract>
      <ReadMore href="/story">Continue Reading…</ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Abstract = styled.p`
  font-size: 1rem;
  margin-bottom: 1em;
  white-space: pre-wrap;
  --lines: 8;

  @media ${QUERIES.tabletOnly} {
    --lines: 16;
  }
`;

const Location = styled.span`
  text-transform: uppercase;
`;

const ReadMore = styled.a`
  font-weight: var(--font-weight-medium);
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`;

export default MainStory;
