import { Suspense } from "react";
import { wikipediaArticlesResource } from "./api/wikipedia";
import { ErrorBoundary } from "./ErrorBoundary";

function getSearchTerm(): string | null {
  return new URLSearchParams(window.location.search).get("q");
}

const wikipediaRes = wikipediaArticlesResource(getSearchTerm() || "");

function Articles() {
  const articles = wikipediaRes.read();

  return (
    <ul className="wikipedia-links">
      {!articles.length && (
        <li>
          <p>0 results :(</p>
        </li>
      )}
      {articles.map(({ title, href }) => (
        <li key={href}>
          <a
            target="_blank"
            className="paper-btn btn-primary-outline"
            rel="noopener noreferrer"
            href={href}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function App(): JSX.Element {
  return (
    <article>
      <h1>Wikipedia search: {getSearchTerm() || ""}</h1>
      <ErrorBoundary
        fallback={(err) => (
          <div className="alert alert-danger">{String(err)}</div>
        )}
      >
        <Suspense
          fallback={<div className="alert alert-primary">Loading...</div>}
        >
          <Articles />
        </Suspense>
      </ErrorBoundary>
    </article>
  );
}
