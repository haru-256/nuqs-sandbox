import NuqsBoard from "@/features/Nuqs/Board";
import NuqsSearch from "@/features/Nuqs/Search";
import NuqsTags from "@/features/Nuqs/Tags";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center p-24 gap-5 min-h-screen">
      <NuqsSearch />
      <NuqsTags />
      <NuqsBoard />
    </main>
  );
}
