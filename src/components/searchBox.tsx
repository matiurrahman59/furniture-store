import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import ArrowButton from "./arrowButton";

export default function SearchBox() {
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [focus, setFocus] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  // whenever navigating to home page, clear search field
  useEffect(() => {
    if (pathname === "/") {
      setSearch("");
      inputRef.current?.blur();
    }
  }, [pathname]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.blur();
    router.push(`/search?query=${search}`);
    setSearch("");
  };

  const clearSearchInput = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <form
      className={`"group flex items-center rounded-md border-2 px-2 focus-within:border-orange ${
        focus ? "border-orange" : "border-gray/25 hover:border-orange/30"
      }`}
      onSubmit={onSubmit}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="pointer-events-none">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray/80" />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="What are you looking for?"
        className="md:w-3/4 rounded-lg border-none p-3 outline-none"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search.length >= 1 && (
        <div className="flex items-center gap-1 self-stretch ">
          <button type="button" onClick={clearSearchInput}>
            <XMarkIcon className="h-6 w-6 text-gray/80 transition-colors hover:text-orangeAlpha" />
          </button>
          <ArrowButton type="submit">
            <ChevronRightIcon className="h-6 w-6" />
          </ArrowButton>
        </div>
      )}
    </form>
  );
}
