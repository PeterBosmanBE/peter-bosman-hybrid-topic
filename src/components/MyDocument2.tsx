"use client";

import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
	},
});

export const MyDocument2 = () => (
	<Document>
		<Page size="A4" style={styles.body}>
				<Text style={styles.title}>Section #1</Text>
				<Image src="/coolefoto.png" style={styles.image} />
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent feugiat egestas ipsum vel pretium. Aliquam eu metus
					neque. Suspendisse consectetur, ante et ornare dignissim,
					sem massa efficitur dolor, in vulputate urna odio eu metus.
					Ut eros sem, interdum sit amet justo id, mollis interdum
					dui. Nulla vel scelerisque ex. Etiam ut porta massa.
					Vestibulum vel risus est. Vestibulum in tortor vel eros
					suscipit euismod at vitae eros. Maecenas congue, dui sit
					amet feugiat euismod, risus nulla laoreet magna, et
					ullamcorper tellus mauris sed nulla. In tincidunt diam
					tortor. Morbi purus tellus, faucibus at maximus a, molestie
					nec velit. Nullam a urna ullamcorper, sagittis mi sodales,
					scelerisque lectus. Fusce id ex vel augue auctor vulputate
					sed id enim. Duis molestie nulla purus, at mattis leo
					posuere vel. Mauris ullamcorper leo at est laoreet volutpat.
					Nunc mattis eros lacus, nec lacinia purus vehicula quis.
					Nunc accumsan purus eu mattis pretium. Curabitur sit amet
					sem sed urna luctus lobortis. Cras ut ipsum felis. Integer
					id dictum elit. Sed id sollicitudin lacus, eget bibendum mi.
					Maecenas consectetur pellentesque quam. Ut venenatis tellus
					at arcu efficitur auctor. Vestibulum commodo posuere risus a
					tempor. Ut fringilla ante non risus feugiat congue. Aenean
					cursus massa lectus, ac lobortis leo tempus ac. Vestibulum
					ut lectus sit amet eros imperdiet laoreet. Sed at eros eget
					nisi maximus molestie. Phasellus commodo molestie placerat.
					Maecenas facilisis, massa vel ultricies congue, ex dui
					tristique velit, et pharetra nibh mauris sed dolor.
					Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Etiam non massa vel velit
					blandit tincidunt ac ut leo. Nam a iaculis sapien, at
					commodo purus. Quisque malesuada pulvinar massa, at pharetra
					nunc aliquet quis. Vivamus non rhoncus velit, in condimentum
					diam. In et est erat. Ut fermentum ipsum vel neque
					venenatis, nec elementum velit sodales. Mauris justo lorem,
					ultricies ac lobortis ut, facilisis vitae eros. Donec
					egestas est eu magna sodales accumsan. Fusce consequat enim
					efficitur tempus tempor. Integer venenatis in tortor non
					consequat. Fusce eget interdum purus. Nulla vitae tortor
					elit. Pellentesque laoreet metus sapien. Duis sit amet lorem
					molestie, dignissim mi quis, auctor tellus. Vivamus
					ultricies cursus scelerisque. Curabitur hendrerit magna a
					massa venenatis aliquet. Proin ac faucibus felis, quis
					faucibus dolor. Donec vitae ullamcorper felis. Vestibulum
					consequat imperdiet condimentum. Vivamus ullamcorper erat
					nec dolor facilisis consectetur. Vivamus eget ipsum eget
					nulla lacinia fermentum. Cras non ex at massa elementum
					scelerisque. Mauris lobortis semper gravida. Fusce sed elit
					ac lacus luctus tincidunt. Donec molestie nibh nisl, eget
					scelerisque quam cursus ac. Mauris eget nisi tortor. Orci
					varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Curabitur euismod sem mi, venenatis
					euismod orci fermentum egestas. Morbi ac porta nisi. Sed vel
					eros mauris. Morbi eleifend laoreet fringilla. Aenean in
					turpis id enim vestibulum rhoncus. Pellentesque rutrum enim
					massa, accumsan fringilla nunc vestibulum ut. Pellentesque
					bibendum commodo risus non fermentum. Sed ac efficitur arcu.
					Suspendisse vulputate tempus enim sed auctor. Phasellus
					mollis ac felis quis laoreet. Maecenas faucibus urna nec
					massa interdum, id pretium libero congue. Nam et auctor
					libero, volutpat maximus lectus. Sed vehicula dictum nunc,
					ac consequat lacus dictum a. Maecenas accumsan est diam, sit
					amet fermentum est bibendum in. Integer vitae nibh eu ex
					malesuada condimentum. Sed sem turpis, porttitor ut dolor
					ac, pretium elementum libero. Pellentesque laoreet erat sed
					gravida tristique. In laoreet tellus nibh, ut posuere ex
					finibus eu. Vivamus convallis nulla varius purus vulputate
					molestie. Cras fringilla suscipit nisl, ut tincidunt dui
					dapibus at. Duis mollis purus eget libero lacinia, et
					posuere erat blandit. Maecenas elementum tellus non risus
					aliquam, vitae sagittis risus ullamcorper. Aliquam finibus
					dui hendrerit euismod aliquet. Maecenas rutrum ex mollis est
					sollicitudin auctor. Quisque sodales massa ac augue suscipit
					tincidunt. In cursus faucibus scelerisque. In consectetur,
					nisl eget efficitur interdum, urna mi aliquam lorem, eget
					pharetra ex nibh in leo. Morbi mollis, lacus sollicitudin
					varius pellentesque, nulla nisl vulputate risus, sit amet
					ultricies arcu orci sed lectus. Mauris et tortor egestas,
					finibus purus vitae, viverra urna. Phasellus gravida velit
					id diam finibus sagittis nec ut odio. Quisque fermentum
					pellentesque dictum. Integer tristique ullamcorper est ac
					efficitur. Ut vel laoreet lectus. Ut dictum dolor sit amet
					lectus ultrices tristique. Suspendisse varius lacinia felis
					a lacinia. Mauris efficitur libero arcu, eget efficitur
					lacus tristique ut. Vestibulum urna arcu, cursus lacinia
					nibh nec, mattis bibendum nibh. Fusce sapien eros, dictum eu
					commodo eget, commodo ac ex. Praesent magna ante, lacinia eu
					pellentesque in, tincidunt id lectus. Quisque a pulvinar
					purus. Aenean venenatis ipsum lorem, a porta ligula
					pellentesque ultrices. Cras nunc tellus, venenatis vitae
					neque in, placerat efficitur nisi. Nam iaculis metus a
					faucibus pulvinar. Aenean vel urna vitae nulla vehicula
					posuere at sit amet ipsum. Mauris tempus tortor a
					consectetur ultrices. Sed imperdiet, ante vel consequat
					egestas, urna tortor sagittis turpis, ut viverra nulla arcu
					eget justo. Donec at commodo turpis. Nam efficitur porttitor
					accumsan. Quisque enim lorem, accumsan ut dui vitae,
					bibendum efficitur ex.
				</Text>
			<Text
				style={styles.pageNumber}
				render={({ pageNumber, totalPages }) =>
					`${pageNumber} / ${totalPages}`
				}
				fixed
			/>
		</Page>
	</Document>
);
