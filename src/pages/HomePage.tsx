import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { listAnimes } from '../api/animeApi';
import AnimeCard from '../components/AnimeCard';
import Pagination from '../components/Pagination';

interface Anime {
  id: number;
  name: string;
  image?: string;
}

interface ApiResponse {
  items: Anime[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

const Page = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const PaginationWrapper = styled.div`
  margin-top: 1.5rem;
`;

const HomePage: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    listAnimes(page, pageSize).then(setData).catch(console.error);
  }, [page]);

  return (
    <Page>
      <Title>Latest Anime</Title>
      <Grid>
        {data?.items.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </Grid>
      {data && (
        <PaginationWrapper>
          <Pagination
            page={data.pagination.page}
            totalPages={data.pagination.totalPages}
            onChange={setPage}
          />
        </PaginationWrapper>
      )}
    </Page>
  );
};

export default HomePage;
