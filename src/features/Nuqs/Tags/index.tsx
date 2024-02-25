"use client";

import React from "react";
import Tag from "@/components/Tag";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";

const labels = ["React", "Next.js", "nuqs", "TypeScript", "Tailwind CSS"];

export default function NuqsTags() {
  const [tags, setTags] = useQueryState("tags", parseAsArrayOf(parseAsString));

  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Tag
          key={label}
          label={label}
          isChecked={tags ? tags.includes(label) : false}
          onClick={() => {
            if (tags) {
              // 選択されているタグをクリックしたら選択解除
              if (tags.includes(label)) {
                const filteredTags = tags.filter((tag) => tag !== label);
                setTags(filteredTags.length ? filteredTags : null);
              } else {
                setTags([...tags, label]);
              }
            } else {
              setTags([label]);
            }
          }}
        />
      ))}
    </div>
  );
}
