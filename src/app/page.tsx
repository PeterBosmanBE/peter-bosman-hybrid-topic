import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Email Pages
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
          Choose one of the pages below to test sending emails.
        </p>

        <div className="mt-8 grid gap-3">
          <Link
            href="/send-email/1"
            className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 font-medium text-zinc-100 transition hover:bg-zinc-700"
          >
            Open Send Email Page 1
          </Link>

          <Link
            href="/send-email/2"
            className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 font-medium text-zinc-100 transition hover:bg-zinc-700"
          >
            Open Send Email Page 2
          </Link>

          <Link
            href="/send-email/3"
            className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 font-medium text-zinc-100 transition hover:bg-zinc-700"
          >
            Open Send Email Page 3
          </Link>
        </div>
      </section>
    </main>
  );
}
