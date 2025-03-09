"use client";

import { MyDocument } from "@/components/MyDocument";

export default function ViewPage() {

	return (
		<div className={"flex min-h-screen flex-col items-center justify-center bg-background dark text-white"}>
			<h1>My PDF Without Viewer</h1>
			<MyDocument />
		</div>
	);
}
