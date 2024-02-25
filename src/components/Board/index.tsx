"use client";

import React from "react";
import clsx from "clsx";

export default function Board(props: {
  query: string | null;
  tags: string[] | null;
}) {
  const { query, tags } = props;
  return (
    <div className="border-2 border-indigo-600 rounded-lg px-5 py-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Query Parameters
      </h2>
      <ul className="list-disc pl-5">
        <li>
          <span>query := </span>
          <span
            className={clsx(
              "h-5 font-bold",
              !query && "italic font-normal text-gray-500"
            )}
          >
            {query ? query : "None"}
          </span>
        </li>
        <li>
          <span>tags := </span>
          <span
            className={clsx(
              "h-5 font-bold",
              !tags && "italic font-normal text-gray-500"
            )}
          >
            {tags ? tags.join(", ") : "None"}
          </span>
        </li>
      </ul>
    </div>
  );
}
