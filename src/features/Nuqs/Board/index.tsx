"use client";

import { useQueryState } from "nuqs";
import Board from "@/components/Board";

export default function NuqsBoard() {
  const [search, _] = useQueryState("query");

  return <Board search={search} />;
}
