import Categories from "@/components/app/Categories";
import Featured from "@/components/app/Featured";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-113px)]">
      <Featured />
      <Categories />
    </div>
  );
}
