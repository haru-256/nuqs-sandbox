"use client";

import { useQueryStates, parseAsArrayOf, parseAsString } from "nuqs";
import Board from "@/components/Board";

export default function NuqsBoard() {
  const [query, _] = useQueryStates({
    query: parseAsString,
    tags: parseAsArrayOf(parseAsString),
  });

  return <Board query={query.query} tags={query.tags} />;
}
