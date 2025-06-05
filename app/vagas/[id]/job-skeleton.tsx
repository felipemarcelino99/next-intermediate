import Skeleton from "react-loading-skeleton";

export default function JobSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-4">
        <Skeleton height={32} width={200} />
      </div>
      <div className="mb-6">
        <Skeleton height={20} width={150} />
      </div>
      <div className="mb-6">
        <Skeleton count={3} />
      </div>
      <div className="flex gap-2">
        <Skeleton height={30} width={100} />
        <Skeleton height={30} width={100} />
      </div>
    </div>
  );
}
