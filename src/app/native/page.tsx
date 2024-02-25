import NativeBoard from "@/features/Native/Board";
import NativeSearch from "@/features/Native/Search";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div>
        <NativeSearch />
      </div>
      <div>
        <NativeBoard />
      </div>
    </main>
  );
}
