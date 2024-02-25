import NuqsBoard from "@/features/Nuqs/Board";
import NuqsSearch from "@/features/Nuqs/Search";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div>
        <NuqsSearch />
      </div>
      <div>
        <NuqsBoard />
      </div>
    </main>
  );
}
