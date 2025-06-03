import { useEffect, useState } from "react";

export function useGithubActivity(username = process.env.NEXT_PUBLIC_GITHUB_USERNAME, count = 5) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/events/public`
        );
        console.log(res);
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data.slice(0, count));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [username, count]);

  return { events, loading, error };
}
