import JobsList from "./_components/jobs-list";
import SearchBar from "./_components/search-bar";

export default async function Vagas({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <SearchBar />
      <JobsList searchParams={searchParams} />
    </main>
  );
}
