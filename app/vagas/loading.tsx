import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
        >
          <div className="mb-2">
            <Skeleton height={24} width={200} />
          </div>
          <div className="mb-4">
            <Skeleton height={16} width={150} />
          </div>
          <div className="flex gap-2">
            <Skeleton height={24} width={80} />
            <Skeleton height={24} width={80} />
          </div>
        </div>
      ))}
    </div>
  );
}
