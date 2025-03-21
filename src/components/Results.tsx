import Card from "@/components/Card";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface ResultsProps {
  results: Movie[];
}

export default function Results({ results }: ResultsProps) {
  if (!results || results.length === 0) {
    return <p className="text-center text-gray-500">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {results.map((movie: Movie) => (
        <Card key={movie.id} result={movie} />
      ))}
    </div>
  );
}