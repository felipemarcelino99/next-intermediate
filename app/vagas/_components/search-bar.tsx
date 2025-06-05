"use client";

import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();
  const previousSearchText = searchParams?.get("search") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    const searchText = e.target.value;

    if (searchText) {
      urlSearchParams.set("search", searchText);
      urlSearchParams.delete("page");
    } else {
      urlSearchParams.delete("search");
    }

    startTransition(() => {
      router.replace(`?${urlSearchParams.toString()}`);
    });
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
        icon={
          isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Search className="size-4" />
          )
        }
        onChange={debouncedHandleChange}
        defaultValue={previousSearchText}
      />
    </div>
  );
}
