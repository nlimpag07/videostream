import React from 'react';
import styled from 'styled-components';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #374151;
  background-color: transparent;
  color: #e5e7eb;
  font-size: 0.875rem;
  cursor: pointer;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: #6366f1;
    background-color: #030712;
  }
`;

const Info = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const Pagination: React.FC<Props> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <Wrapper>
      <Button
        type="button"
        disabled={prevDisabled}
        onClick={() => !prevDisabled && onChange(page - 1)}
      >
        Previous
      </Button>
      <Info>
        Page {page} of {totalPages}
      </Info>
      <Button
        type="button"
        disabled={nextDisabled}
        onClick={() => !nextDisabled && onChange(page + 1)}
      >
        Next
      </Button>
    </Wrapper>
  );
};

export default Pagination;
