"use client";

import React from "react";
import clsx from "clsx";

export default function Board(params: { search: string | null }) {
  const { search } = params;
  return (
    <div className="border-2 border-indigo-600 rounded-lg px-5 py-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Search Board
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Search Query from query string will appear here.
      </p>
      <p className={clsx("h-5 font-bold", !search && "italic")}>
        {search ? search : "None"}
      </p>
    </div>
  );
}
