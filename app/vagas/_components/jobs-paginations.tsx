import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Meta } from "@/lib/types";
import { cn } from "@/lib/utils";

type JobsPaginationProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  meta: Meta;
};

export default async function JobsPagination({
  searchParams,
  meta,
}: JobsPaginationProps) {
  const resolvedPageParams = await searchParams;
  const currentPage = Number(resolvedPageParams.page ?? "1");

  const createPageUrl = (pageNumber: number) => {
    const urlSearchParams = new URLSearchParams();

    if (pageNumber) {
      urlSearchParams.set("page", pageNumber.toString());
    }

    if (resolvedPageParams.search) {
      urlSearchParams.set("search", resolvedPageParams.search as string);
    }

    return `?${urlSearchParams.toString()}`;
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(currentPage === 1 && "cursor-not-allowed")}
            href={createPageUrl(currentPage > 1 ? currentPage - 1 : 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={cn(
              currentPage === meta.last_page && "cursor-not-allowed",
            )}
            href={createPageUrl(
              currentPage === meta.last_page ? currentPage : currentPage + 1,
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
