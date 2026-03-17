import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-lg">
          <Link
            href="/"
            className="pointer-events-auto inline-flex w-full items-center justify-center rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-500/30"
          >
            Go Back
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
