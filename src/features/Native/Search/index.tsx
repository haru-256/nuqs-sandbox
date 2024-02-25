"use client";

import Search from "@/components/Search";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";
import React from "react";

export default function NativeSearch() {
  const { replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  // 検索ボックスの値が変更されたときに呼ばれる関数
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return <Search value={search} onChange={onChange} />;
}
