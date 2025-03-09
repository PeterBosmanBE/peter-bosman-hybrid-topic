"use client";

import { useEffect, useState } from "react";
import { MyDocument } from "@/components/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";

export default function ViewPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className={"flex min-h-screen flex-col items-center justify-center bg-background dark text-white"}>
			<h1>My PDF Viewer</h1>
			{isClient ? (
				<PDFViewer>
					<MyDocument />
				</PDFViewer>
			) : (
				<p>Loading PDF Viewer...</p>
			)}
		</div>
	);
}
