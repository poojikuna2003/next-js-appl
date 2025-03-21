import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function FetchMovies({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const searchParams = await searchParamsPromise;
  const genre = searchParams?.genre ?? "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return <Results results={data.results} />;
}

