import JobItem from "@/components/cards/job-item";
import JobsPagination from "./jobs-paginations";

async function fetchJobs(searchString: string, page?: string) {
  const params = new URLSearchParams();
  if (searchString) {
    params.set("search", searchString);
  }

  if (page) {
    params.set("page", page);
  }

  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Ops, alguma coisa deu errada!");
  }

  const { data, meta } = await res.json();
  return { jobs: data, meta };
}

export default async function JobsList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const searchString = resolvedSearchParams.search as string;
  const page = resolvedSearchParams.page as string;

  const { jobs, meta } = await fetchJobs(searchString, page);

  return (
    <>
      <div className="space-y-8">
        {jobs.map((job: any) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
      <JobsPagination meta={meta} searchParams={searchParams} />
    </>
  );
}
