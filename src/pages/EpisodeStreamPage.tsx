import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import { getEpisode } from '../api/animeApi';

interface EpisodeDetail {
  id: number;
  episodeTitle: string;
  streamUrl: string;
  anime: {
    id: number;
    name: string;
  };
  sources?: {
    id: number;
    value: string;
    label: string | null;
  }[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  color: #6366f1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #000;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const SourcesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SourceCard = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid #1f2937;
  background-color: #020617;
  color: #e5e7eb;
  font-size: 0.875rem;
  text-decoration: none;
  transition: border-color 0.15s ease, background-color 0.15s ease, transform 0.1s ease;

  &:hover {
    border-color: #6366f1;
    background-color: #030712;
    transform: translateY(-1px);
  }
`;

const EpisodeStreamPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [episode, setEpisode] = useState<EpisodeDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getEpisode(Number(id)).then(setEpisode).catch(console.error);
  }, [id]);

  if (!episode) return <div>Loading...</div>;

  const { streamUrl } = episode;
  const useReactPlayer =
    streamUrl.endsWith('.mp4') || streamUrl.endsWith('.m3u8') || ReactPlayer.canPlay(streamUrl);

  return (
    <Container>
      <div>
        <BackLink href={`/anime/${episode.anime.id}`}>
          10 Back to {episode.anime.name}
        </BackLink>
      </div>
      {episode.sources && episode.sources.length > 0 && (
        <div>
          <p>Available mirrors:</p>
          <SourcesContainer>
            {episode.sources.map((s, index) => (
              <SourceCard
                key={s.id}
                href={s.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label || `Source ${index + 1}`}
              </SourceCard>
            ))}
          </SourcesContainer>
        </div>
      )}
      <PlayerWrapper>
        {useReactPlayer ? (
          <ReactPlayer url={streamUrl} controls playing width="100%" height="100%" />
        ) : (
          <Iframe src={streamUrl} title={episode.episodeTitle} allowFullScreen />
        )}
      </PlayerWrapper>
    </Container>
  );
};

export default EpisodeStreamPage;
