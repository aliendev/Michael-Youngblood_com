import { useGithubActivity } from "../../hooks/useGithubActivity";

export default function GithubActivity() {
  const {events, loading, error} = useGithubActivity();

  // handle alternate states
  if (loading)        return <div>Loading GitHub activity...</div>;
  if (error)          return <div>Error: {error}</div>;
  if (!events.length) return <div>No recent GitHub activity found.</div>;

  // we haz the data, display it.
  return (
    <section className="my-5">
      <h2 className="h4 mb-3">Recent GitHub Activity</h2>
      <ul className="list-group">
        {events.map((event) => (
          <li key={event.id} className="list-group-item">
            <span className="fw-bold">{event.type.replace(/Event$/, "")}</span>{" "}
            in <a href={event.repo ? `https://github.com/${event.repo.name}` : "#"} target="_blank" rel="noopener noreferrer">{event.repo?.name}</a>
            <div className="text-muted small">{new Date(event.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
