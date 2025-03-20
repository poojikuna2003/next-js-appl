"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const [genre, setGenre] = useState<string | null>(null);

  useEffect(() => {
    setGenre(searchParams.get("genre") || "");
  }, [searchParams]);

  if (genre === null) return null; 

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
