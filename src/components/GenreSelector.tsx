"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function GenreSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedGenre = searchParams.get("genre") ?? "fetchTrending";

  const handleGenreChange = (genre: string) => {
    router.push(`/?genre=${genre}`, { scroll: false });
  };

  return (
    <div className="flex space-x-4 p-4">
      <button
        onClick={() => handleGenreChange("fetchTrending")}
        className={selectedGenre === "fetchTrending" ? "font-bold text-amber-500" : ""}
      >
        Trending
      </button>
      <button
        onClick={() => handleGenreChange("fetchTopRated")}
        className={selectedGenre === "fetchTopRated" ? "font-bold text-amber-500" : ""}
      >
        Top Rated
      </button>
    </div>
  );
}
