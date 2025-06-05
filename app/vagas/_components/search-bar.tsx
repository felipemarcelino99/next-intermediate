"use client";

import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const previousSearchText = searchParams?.get("search") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    const searchText = e.target.value;

    if (searchText) {
      urlSearchParams.set("search", searchText);
    } else {
      urlSearchParams.delete("search");
    }

    router.replace(`?${urlSearchParams.toString()}`);
  };

  const debouncedHandleChange = useDebouncedCallback(
    (e) => handleChange(e),
    500,
  );

  return (
    <div className="mb-8">
      <Input
        type="search"
        placeholder="Busque uma vaga..."
        className="py-6 text-lg"
        icon={<Search className="size-4" />}
        onChange={debouncedHandleChange}
        defaultValue={previousSearchText}
      />
    </div>
  );
}
