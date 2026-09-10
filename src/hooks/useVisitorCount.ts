import { useState, useEffect } from 'react';

const BASE_OFFSET = 124; // Baseline visitors for established portfolio look

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

    async function fetchVisitorCount() {
      try {
        const sessionCount = sessionStorage.getItem('portfolio_session_count');
        const sessionVisited = sessionStorage.getItem('portfolio_session_visited');

        if (sessionVisited && sessionCount) {
          const parsed = parseInt(sessionCount, 10);
          if (!isNaN(parsed) && isMounted) {
            setCount(parsed);
            setIsLoading(false);
            return;
          }
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch('https://hits.dwyl.com/priyanka-r-s/My_Portfolio.json', {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const rawCount = parseInt(data.message, 10);
          if (!isNaN(rawCount)) {
            const finalCount = BASE_OFFSET + rawCount;
            if (isMounted) {
              setCount(finalCount);
              setIsLoading(false);
            }
            try {
              sessionStorage.setItem('portfolio_session_visited', 'true');
              sessionStorage.setItem('portfolio_session_count', String(finalCount));
              localStorage.setItem('portfolio_visitor_count', String(finalCount));
            } catch {
              // ignore storage quotas
            }
            return;
          }
        }
      } catch {
        // Graceful fallback to existing cached count or default baseline
      }

      if (isMounted) {
        setIsLoading(false);
      }
    }

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return { count, isLoading };
}
