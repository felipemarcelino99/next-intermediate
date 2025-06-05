import Skeleton from "react-loading-skeleton";

export default function CommentsSkeleton() {
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="max-w-full">
            <Skeleton height={80} className="mb-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
