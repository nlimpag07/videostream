import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type BsxItem = {
  index: number;
  href: string;
  imgSrc: string;
  title: string;
  sources?: { value: string; label: string | null }[];
};

type ApiResponse = {
  success: boolean;
  count?: number;
  items?: BsxItem[];
  error?: string;
};

const LoadSitePage: React.FC = (props) => {
  const [data, setData] = useState<BsxItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/loadsite?page=${page}`);
        const json: ApiResponse = await res.json();

        if (!json.success) {
          setError(json.error || 'Unknown error');
          setData(null);
        } else {
          setData(json.items ?? []);
        }
      } catch (err: any) {
        setError(err?.message || 'Failed to fetch data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>Load Site: luciferdonghua.in</h1>
      <p>Fetching cards (href, image, title) inside div.excstf .bsx</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1 || loading}
          style={{ padding: '0.25rem 0.75rem', cursor: 'pointer' }}
        >
          ← Prev
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={loading}
          style={{ padding: '0.25rem 0.75rem', cursor: 'pointer' }}
        >
          Next →
        </button>
      </div>

      {loading && <p>Loading…</p>}
      {error && (
        <p style={{ color: 'red' }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && data && (
        <>
          <p>Found {data.length} cards inside div.excstf .bsx</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.map((item) => (
              <li
                key={item.index}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '0.75rem',
                  marginBottom: '0.75rem',
                  background: '#111827',
                  color: '#e5e7eb',
                }}
              >
                <a
                  href={item.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {item.imgSrc && (
                    <Image
                      src={item.imgSrc}
                      alt={item.title || 'Card image'}
                      width={80}
                      height={80}
                      style={{
                        height: 'auto',
                        borderRadius: '4px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1rem' }}>{item.title || 'No title'}</h2>
                    <small style={{ color: '#9ca3af', wordBreak: 'break-all' }}>
                      Href: {item.href || 'N/A'}
                    </small>
                  </div>
                </a>
                {item.sources && item.sources.length > 0 && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <small style={{ color: '#9ca3af' }}>Sources:</small>
                    <div
                      style={{
                        marginTop: '0.25rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                      }}
                    >
                      {item.sources.map((src, index) => (
                        <a
                          key={`${item.index}-${index}-${src.value}`}
                          href={`/watchsource?src=${encodeURIComponent(src.value)}`}
                          style={{
                            padding: '0.2rem 0.5rem',
                            borderRadius: '9999px',
                            border: '1px solid #1f2937',
                            background: '#020617',
                            color: '#e5e7eb',
                            fontSize: '0.75rem',
                            textDecoration: 'none',
                          }}
                        >
                          {src.label || `Source ${index + 1}`}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default LoadSitePage;
