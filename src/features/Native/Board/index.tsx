"use client";

import { useSearchParams } from "next/navigation";
import Board from "@/components/Board";

export default function NativeBoard() {
  const searchParams = useSearchParams();

  return <Board search={searchParams.get("query")} />;
}
