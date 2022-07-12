export const composerType = ["Musical Composer", "Lyricist"];

export const workCategory = [
	"Music Composition",
	"Sound Recording",
	"Performance",
];
export const composersList = [
	{
		givenName: "Composor 1",
		otherName: "Jhone",
		composerType: composerType[0],
		cmoAffiliation: "Affiliation",
		isni: "isni code here",
		shares: 123,
	},
	{
		givenName: "Composor 2",
		otherName: "Jhone",
		composerType: composerType[0],
		cmoAffiliation: "Affiliation",
		isni: "isni code here",
		shares: 123,
	},
];

export const rightHolderList = [
	{
		givenName: "Right Holder 1",
		otherName: "Jhone",
		composerType: composerType[0],
		cmoAffiliation: "Affiliation",
		isni: "isni code here",
		shares: 123,
	},
	{
		givenName: "Right Holder 2",
		otherName: "Jhone",
		composerType: composerType[0],
		cmoAffiliation: "Affiliation",
		isni: "isni code here",
		shares: 123,
	},
];

export const workDetails = [
	{
		title: "Dumy 1",
		workCategory: workCategory[0],
		composers: composersList,
	},
];

export const work = [
	{
		title: "work1",
		registrant: "Artist 1",
		musicalCompositionTitle: "Music 1",
		statusOfRecording: "Demo",
		workCategory: "Music Composition",
		iSRC: "isrc 1",
		isOriginal: true,
		isFirstRecordingOfMusicalComposition: true,
		mediaSubmitted: "media",
		dateOfRegistration: "12-12-2022",
		rightsholders: `${rightHolderList
			.flatMap(({ givenName }) => givenName)
			.join()}`,
		myRightHolders: rightHolderList,
	},
];
