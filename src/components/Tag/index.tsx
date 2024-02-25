import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Tag(props: {
  label: string;
  isChecked: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { label, isChecked, onClick } = props;
  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      <div className="flex flex-row gap-2">
        {isChecked && (
          <CheckCircleIcon className=" h-5 w-5" aria-hidden="true" />
        )}
        {label}
      </div>
    </button>
  );
}
