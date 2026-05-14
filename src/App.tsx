import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import AnimeDetailsPage from './AnimeDetailsPage';
import EpisodeStreamPage from './EpisodeStreamPage';

const AppShell = styled.div`
  min-height: 100vh;
  background-color: #020617;
  color: #f9fafb;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #1f2937;
  background: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(12px);
`;

const HeaderInner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #6366f1;
  text-decoration: none;

  &:hover {
    color: #818cf8;
  }
`;

const Main = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

const App: React.FC = () => {
  return (
    <AppShell>
      <Header>
        <HeaderInner>
          <BrandLink to="/">Anime Stream</BrandLink>
        </HeaderInner>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimeDetailsPage />} />
          <Route path="/episode/:id" element={<EpisodeStreamPage />} />
        </Routes>
      </Main>
    </AppShell>
  );
};

export default App;
