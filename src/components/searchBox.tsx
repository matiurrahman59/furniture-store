import {
  ArrowSmallRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

export default function SearchBox() {
  const [focus, setFocus] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearSearchInput = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <form
      className={`"group mx-4 flex items-center rounded-md border-2 px-2 focus-within:border-orange ${
        focus ? "border-orange" : "border-gray/25 hover:border-orange/30"
      }`}
      onSubmit={onSubmit}
    >
      <MagnifyingGlassIcon className="h-6 w-6 text-gray/80" />
      <input
        ref={inputRef}
        type="text"
        placeholder="What are you looking for?"
        className="flex-1 rounded-lg border-none p-3 outline-none"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search.length >= 1 && (
        <div className="flex items-center gap-1 self-stretch ">
          <button onClick={clearSearchInput}>
            <XMarkIcon className="h-6 w-6 text-gray/80 transition-colors hover:text-orangeAlpha" />
          </button>
          <button className="my-auto h-3/4 self-stretch rounded-md bg-gray/20 px-1 transition-colors hover:bg-gray/40">
            <ArrowSmallRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </form>
  );
}
