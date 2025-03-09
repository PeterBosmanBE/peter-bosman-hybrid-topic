"use client";

import { useEffect, useState } from "react";
import { MyDocument } from "@/components/MyDocument";
import { MyDocument2 } from "@/components/MyDocument2";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function DownloadPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background dark text-white">
			<h1>My PDF Download</h1>
			<div className="flex flex-col justify-between gap-3 sm:flex-row">
				{isClient ? (
					<>
						<PDFDownloadLink document={<MyDocument />} fileName={"Mijn Document"}>
							{({ loading }) =>
								loading ? (
									<Button disabled={true}>Loading Document...</Button>
								) : (
									<Button>Download Document 1</Button>
								)
							}
						</PDFDownloadLink>

						<PDFDownloadLink document={<MyDocument2 />} fileName={"Mijn Document"}>
							{({ loading }) =>
								loading ? (
									<Button disabled={true}>Loading Document...</Button>
								) : (
									<Button>Download Document 2</Button>
								)
							}
						</PDFDownloadLink>
					</>
				) : (
					<p>Loading download links...</p>
				)}
			</div>
		</div>
	);
}
