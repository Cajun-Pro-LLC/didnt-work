'use client';

import ClipboardOutlineIcon from "@heroicons/react/24/outline/ClipboardIcon";
import ClipboardSolidIcon from "@heroicons/react/24/solid/ClipboardIcon";
import CheckCircleIcon from "@heroicons/react/24/outline/CheckCircleIcon";

import { useState } from "react";

export default function GeneratedLink({ problem = "" }: { problem: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  const link = problem.length > 0
    ? `https://didntwork.dev/issue?problem=${problem.replace(/ /g, "+")}`
    : "https://didntwork.dev"
  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex bg-gray-600 rounded-md p-2 text-clip w-full max-w-md justify-between content-center">
      <div className="overflow-x-scroll w-full no-scrollbar">
        <p className="whitespace-nowrap">{link}</p>
      </div>
      <div className="relative ml-2 w-6 h-6 rounded-md">
        <CheckCircleIcon className={`absolute top-1 left-1 w-5 h-5 text-green-500 transition-opacity duration-100 ease-linear ${copied
          ? "opacity-100"
          : "opacity-0"}`} />
        <button
          onClick={handleCopy}
          className={`group absolute top-0 left-0 p-1 rounded-md hover:bg-gray-400 transition-opacity duration-100 ease-linear ${copied
            ? "opacity-0"
            : "opacity-100"}`}
        >
          <ClipboardOutlineIcon className="w-5 h-5 group-hover:hidden" />
          <ClipboardSolidIcon className="w-5 h-5 hidden group-hover:block" />
        </button>
      </div>

    </div>
  )
}
