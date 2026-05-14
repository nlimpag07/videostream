import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAnime } from '../api/animeApi';

interface Episode {
  id: number;
  episodeTitle: string;
}

interface AnimeDetail {
  id: number;
  name: string;
  image?: string;
  episodes: Episode[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Poster = styled.img`
  width: 12rem;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 1px solid #1f2937;
`;

const Info = styled.div``;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Meta = styled.p`
  color: #9ca3af;
`;

const EpisodesTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EpisodeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EpisodeItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #1f2937;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: #6366f1;
    background-color: #030712;
  }
`;

const AnimeDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [anime, setAnime] = useState<AnimeDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getAnime(Number(id)).then(setAnime).catch(console.error);
  }, [id]);

  if (!anime) return <div>Loading...</div>;

  return (
    <Container>
      <TopSection>
        {anime.image && <Poster src={anime.image} alt={anime.name} />}
        <Info>
          <Title>{anime.name}</Title>
          <Meta>Episodes: {anime.episodes.length}</Meta>
        </Info>
      </TopSection>
      <div>
        <EpisodesTitle>Episodes</EpisodesTitle>
        <EpisodeList>
          {anime.episodes.map((ep) => (
            <li key={ep.id}>
              <EpisodeItemLink href={`/episode/${ep.id}`}>
                {ep.episodeTitle}
              </EpisodeItemLink>
            </li>
          ))}
        </EpisodeList>
      </div>
    </Container>
  );
};

export default AnimeDetailsPage;
