import {
  createResource,
  JSX,
  Suspense,
  ErrorBoundary,
  For,
  createSignal,
} from "solid-js";
import { fetchWikipediaOpenSearch } from "./api/wikipedia";
import { SpatialNavigationProvider } from "./Navigation";
import SpatialNavigation from "spatial-navigation-ts";
import { appIdSelector, appIds } from "./constants";

function Articles(props: { query: string }) {
  const [articles] = createResource(
    () => props.query,
    (search) => (search ? fetchWikipediaOpenSearch(search) : []),
  );

  return (
    <section class="results-section">
      <h2>{articles()?.length || 0} results</h2>
      <ul class="wikipedia-links">
        <For
          each={articles()}
          fallback={
            <li>
              <p>0 results :(</p>
            </li>
          }
        >
          {({ title }, idx) => (
            <li>
              <div
                id={`wiki-art-${idx()}`}
                data-sn-left={
                  idx() === 0
                    ? appIdSelector("searchSubmit")
                    : `#wiki-art-${idx() - 1}`
                }
                data-sn-right={
                  idx() < (articles()?.length ?? 0) - 1
                    ? `#wiki-art-${idx() + 1}`
                    : appIdSelector("backToTop")
                }
                tabIndex={-1}
                role="button"
                class="wikipedia-item card focusable"
              >
                <div class="card-body">
                  <h3 class="card-title">{title}</h3>
                </div>
                <img
                  src={`https://picsum.photos/id/${
                    idx() + 16
                  }/300/200?grayscale&blur=1`}
                  loading="lazy"
                  alt="sample image"
                />
              </div>
            </li>
          )}
        </For>
      </ul>
      <div>
        <hr />
        <button
          id={appIds.backToTop}
          tabIndex={-1}
          type="button"
          class="focusable back-to-top"
          onClick={() => SpatialNavigation.focus()}
        >
          back to top ⬆
        </button>
      </div>
    </section>
  );
}

export function App(): JSX.Element {
  const [query, setQuery] = createSignal<string>("");

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (evt) => {
    const nextValue = (evt.currentTarget[0] as HTMLInputElement)?.value || "";
    console.log(`submit-event, query=${nextValue}`);
    evt.preventDefault();

    SpatialNavigation.focus();

    setQuery((evt.currentTarget[0] as HTMLInputElement)?.value || "");
  };

  return (
    <SpatialNavigationProvider>
      <nav class="border split-nav navbar">
        <form class="form-group query-form" onSubmit={handleSubmit}>
          <label class="visually-hidden" for="q">
            Search wikipedia
          </label>
          <input
            tabIndex={-1}
            class="focusable"
            type="search"
            name="q"
            placeholder="query wikipedia"
            id={appIds.searchInput}
          />
          <button type="reset" tabIndex={-1} class="btn btn-small focusable">
            clear
          </button>
          <button
            tabIndex={-1}
            type="submit"
            class="btn focusable"
            id={appIds.searchSubmit}
          >
            Submit
          </button>
        </form>
      </nav>
      <article>
        <h1>Wikipedia search: {query() || ""}</h1>
        <ErrorBoundary
          fallback={(err) => (
            <div class="alert alert-danger">{String(err)}</div>
          )}
        >
          <Suspense
            fallback={
              <div class="alert alert-primary">
                {query() ? "⏳ Loading..." : "Search a wikipedia article"}
              </div>
            }
          >
            <Articles query={query()} />
          </Suspense>
        </ErrorBoundary>
      </article>
    </SpatialNavigationProvider>
  );
}
