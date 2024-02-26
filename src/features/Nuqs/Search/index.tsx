"use client";

import Search from "@/components/Search";
import React from "react";
import { useQueryState } from "nuqs";

export default function NuqsBoard() {
  const [query, setQuery] = useQueryState("query");
  // 検索ボックスの値が変更されたときに呼ばれる関数
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value) {
      setQuery(value);
    } else {
      setQuery(null);
    }
  };

  return <Search value={query} onChange={onChange} />;
}
