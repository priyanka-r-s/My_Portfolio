import { useState, useEffect } from 'react';

// Starting baseline to preserve existing visitor count seamlessly
const BASE_OFFSET = 124;
const API_BASE = 'https://abacus.jasoncameron.dev';
const COUNTER_NAMESPACE = 'priyanka-sahu-portfolio';
const COUNTER_KEY = 'views';

export function useVisitorCount() {
  const [count, setCount] = useState<number>(() => {
    try {
      const cached = localStorage.getItem('portfolio_visitor_count');
      return cached ? parseInt(cached, 10) : BASE_OFFSET;
    } catch {
      return BASE_OFFSET;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function recordAndFetchVisit() {
      try {
        // Check if this visitor has already been counted in this browser session
        const hasCountedSession = sessionStorage.getItem('portfolio_session_counted');

        // If it's a new visitor session, increment the global counter; otherwise fetch latest total
        const endpoint = hasCountedSession
          ? `${API_BASE}/get/${COUNTER_NAMESPACE}/${COUNTER_KEY}`
          : `${API_BASE}/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(endpoint, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const serverValue =
            typeof data.value === 'number' ? data.value : parseInt(data.value, 10);

          if (!isNaN(serverValue)) {
            const finalCount = BASE_OFFSET + serverValue;
            if (isMounted) {
              setCount(finalCount);
              setIsLoading(false);
            }
            try {
              sessionStorage.setItem('portfolio_session_counted', 'true');
              localStorage.setItem('portfolio_visitor_count', String(finalCount));
            } catch {
              // Ignore storage errors
            }
            return;
          }
        }
      } catch (error) {
        // Graceful fallback to existing cached count
      }

      if (isMounted) {
        setIsLoading(false);
      }
    }

    recordAndFetchVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return { count, isLoading };
}
