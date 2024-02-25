"use client";

import React from "react";
import Tag from "@/components/Tag";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";

const labels = ["React", "Next.js", "nuqs", "TypeScript", "Tailwind CSS"];

export default function NativeTags() {
  const { replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const tags = searchParams.get("tags")?.split(",");

  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Tag
          key={label}
          label={label}
          isChecked={tags ? tags.includes(label) : false}
          // 各タグがクリックされたときに呼ばれる関数
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            if (tags) {
              // 選択されているタグをクリックしたら選択解除
              if (tags.includes(label)) {
                const filteredTags = tags.filter((tag) => tag !== label);
                if (filteredTags.length) {
                  params.set("tags", filteredTags.join(","));
                } else {
                  params.delete("tags");
                }
              } else {
                params.set("tags", [...tags, label].join(","));
              }
            } else {
              params.set("tags", label);
            }

            const paramsString = params.toString();
            replace(
              paramsString ? `${pathName}?${params.toString()}` : pathName
            );
          }}
        />
      ))}
    </div>
  );
}
