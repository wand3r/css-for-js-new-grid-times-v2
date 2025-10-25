import React from "react";
import styled from "styled-components";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <TextContent>
          <Heading>{title}</Heading>
          <Abstract className="multi-line-truncate">{abstract}</Abstract>
        </TextContent>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--color-gray-900);
`;

const TextContent = styled.div`
  flex: 9999;
  min-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Image = styled.img`
  display: block;
  flex: 1 1 auto;
  width: 120px;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  --lines: 3;
  align-self: start;
`;

export default SecondaryStory;
