import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface MovieResult {
  id: number;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface CardProps {
  result: MovieResult;
}

export default function Card({ result }: CardProps) {
  if (!result) {
    return null; 
  }

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-md rounded-lg sm:border sm:border-gray-300 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path || ""}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          alt={result.title || result.name || "Image not available"}
        />
        <div className="p-2">
          <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}


