import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  anime: {
    id: number;
    name: string;
    image?: string;
  };
}

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1f2937;
  background-color: #0f172a;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #6366f1;
    box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.7);
    transform: translateY(-2px);
  }
`;

const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%;
  background-color: #111827;
  overflow: hidden;
`;

const PosterImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;

  ${CardLink}:hover & {
    transform: scale(1.05);
  }
`;

const PosterFallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 0.875rem;
`;

const CardBody = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex: 1;
`;

const CardTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const AnimeCard: React.FC<Props> = ({ anime }) => {
  return (
    <CardLink href={`/anime/${anime.id}`}>
      <PosterWrapper>
        {anime.image ? (
          <PosterImage src={anime.image} alt={anime.name} />
        ) : (
          <PosterFallback>No image</PosterFallback>
        )}
      </PosterWrapper>
      <CardBody>
        <CardTitle>{anime.name}</CardTitle>
      </CardBody>
    </CardLink>
  );
};

export default AnimeCard;
