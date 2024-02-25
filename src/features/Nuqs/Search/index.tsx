"use client";

import Search from "@/components/Search";
import React from "react";
import { useQueryState } from "nuqs";

export default function NuqsBoard() {
  const [search, setSearch] = useQueryState("query");
  // 検索ボックスの値が変更されたときに呼ばれる関数
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value) {
      setSearch(value);
    } else {
      setSearch(null);
    }
  };

  return <Search value={search} onChange={onChange} />;
}
