import Image from "next/image";

interface Movie {
  title?: string;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: PageProps) {
  const movieId = params.id;

  if (!movieId) {
    return <p className="text-center text-red-500">Invalid Movie ID</p>;
  }

  if (!process.env.API_KEY) {
    throw new Error("API_KEY is missing in env");
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  const movie: Movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {movie.backdrop_path || movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-lg"
            alt={movie.title || "Movie Image"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || "Untitled"}</h2>
          <p className="text-lg mb-3">{movie.overview || "No overview available."}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || "N/A"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average ? `${movie.vote_average} (${movie.vote_count} votes)` : "No rating"}
          </p>
        </div>
      </div>
    </div>
  );
}


