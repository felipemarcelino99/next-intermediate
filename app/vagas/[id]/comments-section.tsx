async function fetchComments(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}/comments?slow=true`,
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.data;
}

type Comment = {
  id: string;
  author: string;
  content: string;
};

export default async function CommentsSection({ jobId }: { jobId: string }) {
  const comments = await fetchComments(jobId);

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
      <div className="space-y-4">
        {comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className="max-w-full rounded-lg border-l-4 border-l-blue-400 bg-gray-50 p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="mb-2 flex items-center gap-3">
              <p className="font-semibold text-gray-800">{comment.author}</p>
            </div>
            <p className="leading-relaxed text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
