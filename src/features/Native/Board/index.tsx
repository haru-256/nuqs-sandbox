"use client";

import { useSearchParams } from "next/navigation";
import Board from "@/components/Board";

export default function NativeBoard() {
  const searchParams = useSearchParams();

  return (
    <Board
      query={searchParams.get("query")}
      tags={searchParams.get("tags")?.split(",") || null}
    />
  );
}
