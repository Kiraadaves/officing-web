import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <div className="xl:hidden">
        mobile and tablet design not ready yet
      </div>
      <div className="hidden xl:block">
        <Header pageTitle="Dashboard" />
      </div>
    </main>
  );
}
