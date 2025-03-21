import FetchMovies from "@/components/FetchMovies";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const searchParamsPromise = Promise.resolve(searchParams);

  return <FetchMovies searchParams={searchParamsPromise} />;
} 
