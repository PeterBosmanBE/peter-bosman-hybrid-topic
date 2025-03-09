"use client";

import { useEffect, useState } from "react";
import { MyDocument2 } from "@/components/MyDocument2";
import { PDFViewer } from "@react-pdf/renderer";

export default function ViewPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className={"flex min-h-screen flex-col items-center justify-center bg-background dark text-white"}>
			<h1>My PDF Viewer</h1>
			<div className="w-full h-[80vh]">
				{isClient ? (
					<PDFViewer className="w-full h-full">
						<MyDocument2 />
					</PDFViewer>
				) : (
					<p>Loading PDF Viewer...</p>
				)}
			</div>
		</div>
	);
}

