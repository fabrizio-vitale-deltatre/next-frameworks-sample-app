export type WikipediaSearchResult = [
  /*  query */
  string,
  /* title */
  string[],
  /* url */
  string[]
];

export async function fetchWikipediaOpenSearch(
  query: string
): Promise<WikipediaSearchResult> {
  const queryUrl = new URL(
    "https://en.wikipedia.org/w/api.php?action=opensearch&limit=480&namespace=0&format=json&origin=*"
  );

  queryUrl.searchParams.set("search", query);

  const res = await fetch(queryUrl, {
    headers: {
      accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`fetch error: status ${res.status}`);
  }

  return res.json() as unknown as WikipediaSearchResult;
}
