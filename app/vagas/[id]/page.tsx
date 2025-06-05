import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import CommentsSection from "./comments-section";
import CommentsSkeleton from "./comments-skeleton";
import JobPostingCard from "./job-posting-card";
import JobSkeleton from "./job-skeleton";

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <Suspense fallback={<JobSkeleton />}>
        <JobPostingCard jobId={jobId} />
      </Suspense>

      <Suspense fallback={<CommentsSkeleton />}>
        <CommentsSection jobId={jobId} />
      </Suspense>
    </div>
  );
}
