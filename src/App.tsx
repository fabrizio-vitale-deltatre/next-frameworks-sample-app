import { FormEvent, Suspense, useState } from "react";
import { fetchWikipediaOpenSearch } from "./api/wikipedia";
import { ErrorBoundary } from "./ErrorBoundary";
import { SpatialNavigationProvider } from "./Navigation";
import useSWR, { SWRConfig } from "swr";
import SpatialNavigation from "spatial-navigation-ts";
import { appIdSelector, appIds } from "./constants";

function Articles({ query }: { query: string }) {
  const { data: articles } = useSWR(
    ["wiki/search", query],
    query ? ([_, query]) => fetchWikipediaOpenSearch(query) : null,
    {
      suspense: true,
    },
  );

  return (
    <section className="results-section">
      <h2>{articles.length} results</h2>
      <ul className="wikipedia-links">
        {articles.map(({ title, href }, idx) => (
          <li key={href}>
            <div
              id={`wiki-art-${idx}`}
              data-sn-left={
                idx === 0
                  ? appIdSelector("searchSubmit")
                  : `#wiki-art-${idx - 1}`
              }
              data-sn-right={
                idx < articles.length - 1
                  ? `#wiki-art-${idx + 1}`
                  : appIdSelector("backToTop")
              }
              tabIndex={-1}
              role="button"
              className="wikipedia-item card focusable"
            >
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
              </div>
              <img
                src={`https://picsum.photos/id/${
                  idx + 16
                }/300/200?grayscale&blur=1`}
                loading="lazy"
                alt="sample image"
              />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <hr />
        <button
          id={appIds.backToTop}
          tabIndex={-1}
          type="button"
          className="focusable back-to-top"
          onClick={() => SpatialNavigation.focus()}
        >
          back to top ⬆
        </button>
      </div>
    </section>
  );
}

export function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    SpatialNavigation.focus();

    setQuery((evt.currentTarget[0] as HTMLInputElement)?.value || "");
  };

  return (
    <SWRConfig>
      <SpatialNavigationProvider>
        <nav className="border split-nav navbar">
          <form className="form-group query-form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="q">
              Search wikipedia
            </label>
            <input
              tabIndex={-1}
              className="focusable"
              type="search"
              name="q"
              defaultValue=""
              placeholder="query wikipedia"
              id={appIds.searchInput}
            />
            <button
              type="reset"
              tabIndex={-1}
              className="btn btn-small focusable"
            >
              clear
            </button>
            <button
              tabIndex={-1}
              type="submit"
              className="btn focusable"
              id={appIds.searchSubmit}
            >
              Submit
            </button>
          </form>
        </nav>
        <article>
          <h1>Wikipedia search: {query || ""}</h1>
          <ErrorBoundary
            fallback={(err) => (
              <div className="alert alert-danger">{String(err)}</div>
            )}
          >
            <Suspense
              fallback={
                <div className="alert alert-primary">
                  {query ? "⏳ Loading..." : "Search a wikipedia article"}
                </div>
              }
            >
              <Articles query={query} />
            </Suspense>
          </ErrorBoundary>
        </article>
      </SpatialNavigationProvider>
    </SWRConfig>
  );
}
