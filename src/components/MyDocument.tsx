"use client";

import { PDFViewer, Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useState } from "react";

const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		backgroundColor: "#E4E4E4",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
);

export default function PDFViewerComponent() {
	return (
			<PDFViewer style={{ width: "100%", height: "500px" }}>
				<MyDocument />
			</PDFViewer>
	);
}
