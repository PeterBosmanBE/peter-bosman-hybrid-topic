import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background dark">
			<main className="container flex flex-col items-center justify-center gap-6 px-4 py-16 md:gap-10">
				<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
					Welcome
				</h1>
				<div className="flex w-full max-w-3xl flex-col justify-between gap-4 sm:flex-row">
					<Link href="/viewer" className="flex-1">
						<Button className="w-full" size="lg">
							View PDF
						</Button>
					</Link>
					<Link href="/download" className="flex-1">
						<Button className="w-full" size="lg">
							Download PDF
						</Button>
					</Link>
				</div>
			</main>
		</div>
	);
}

