"use client"; // 👈 This makes it a Client Component

import MyDocument from "./MyDocument";

export default function ClientPage() {
	return (
		<div>
			<h1>My PDF Viewer</h1>
			<MyDocument />
		</div>
	);
}
