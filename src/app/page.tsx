import FetchMovies from "@/components/FetchMovies";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  return <FetchMovies searchParams={searchParams} />;
} 
