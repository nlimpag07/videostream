import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ApiResponse {
  success: boolean;
  html?: string;
  error?: string;
}

const WatchSourcePage: React.FC = () => {
  const router = useRouter();
  const { src } = router.query as { src?: string };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const fetchAndParse = async () => {
      setLoading(true);
      setError(null);
      setIframeSrc(null);

      try {
        const res = await fetch(`/api/watchsource?src=${encodeURIComponent(src)}`);
        const json: ApiResponse = await res.json();

        if (!json.success || !json.html) {
          setError(json.error || 'Failed to load source HTML');
          return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(json.html, 'text/html');

        const container = doc.querySelector('div#embed_holder.lowvid');
        let foundSrc: string | null = null;

        if (container) {
          const iframe = container.querySelector('iframe');
          if (iframe) {
            foundSrc = iframe.getAttribute('src');
          }
        }

        if (!foundSrc) {
          setError('Could not find embed iframe in the HTML response');
          return;
        }

        setIframeSrc(foundSrc);
      } catch (err: any) {
        setError(err?.message || 'Failed to load source HTML');
      } finally {
        setLoading(false);
      }
    };

    fetchAndParse();
  }, [src]);

  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>Watch Source</h1>
      {src && (
        <p style={{ color: '#9ca3af', wordBreak: 'break-all' }}>
          Original source: {src}
        </p>
      )}

      {loading && <p>Loading…</p>}
      {error && (
        <p style={{ color: 'red' }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && iframeSrc && (
        <div
          style={{
            marginTop: '1rem',
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            backgroundColor: '#000',
            borderRadius: '0.75rem',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={iframeSrc}
            title="Embedded Source Player"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allowFullScreen
          />
        </div>
      )}

      {!loading && !error && !iframeSrc && (
        <p>No iframe found for this source.</p>
      )}
    </div>
  );
};

export default WatchSourcePage;
