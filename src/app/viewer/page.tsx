import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background dark">
			<main className="container flex flex-col items-center justify-center gap-6 px-4 py-16 md:gap-10">
				<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
					View PDF
				</h1>
				<div className="flex w-full max-w-3xl flex-col justify-between gap-4 sm:flex-row">
					<Link href="/viewer/example1" className="flex-1">
						<Button className="w-full" size="lg">
							Example 1
						</Button>
					</Link>
					<Link href="/viewer/example2" className="flex-1">
						<Button className="w-full" size="lg">
							Example 2
						</Button>
					</Link>
					<Link href="/viewer/example3" className="flex-1">
						<Button className="w-full" size="lg">
							Example 3
						</Button>
					</Link>
				</div>
			</main>
		</div>
	);
}

