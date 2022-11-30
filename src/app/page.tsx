import FaqList from "../components/FaqList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold"> Ask Buddie FAQ </h1>
        <FaqList />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/askbuddie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask Buddie Open Source
        </a>
      </footer>
    </div>
  );
}
