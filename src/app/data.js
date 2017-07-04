// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const BookData = {
	books: [
			{ id: 1, year: "1873", title: "The Gilded Age: A Tale of Today", firstLine: "Squire Hawkins sat upon the pyramid of large blocks, called the 'stile,'' in front of his house, contemplating the morning." },
			{ id: 2, year: "1881", title: "The Prince and the Pauper", firstLine: "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century, a boy was born to a poor family of the name of Canty, who did not want him." },
			{ id: 3, year: "1889", title: "A Connecticut Yankee in King Arthur's Court", firstLine: "I am an American. I was born and reared in Hartford, in the Stateof Connecticut — anyway, just over the river, in the country." },
			{ id: 4, year: "1892", title: "The American Claimant", firstLine: "It is a matchless morning in rural England." },
			{ id: 5, year: "1894", title: "Pudd'nhead Wilson", firstLine: "The scene of this chronicle is the town of Dawson's Landing, on the Missouri side of the Mississippi, half a day's journey, per steamboat, below St. Louis." },
			{ id: 6, year: "1896", title: "Personal Recollections of Joan of Arc", firstLine: "This is the year 1492. I am eighty-two years of age. The things I am going to tell you are things which I saw myself as a child and as a youth." },
			{ id: 7, year: "1916", title: "The Mysterious Stranger", firstLine: "It was in 1590 — winter" },
			{ id: 8, year: "1876", title: "The Adventures of Tom Sawyer", firstLine: "TOM!" },
			{ id: 9, year: "1884", title: "Adventures of Huckleberry Finn", firstLine: "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter." },
			{ id: 10, year: "1894", title: "Tom Sawyer Abroad", firstLine: "Do you reckon Tom Sawyer was satisfied after all them adventures?" },
			{ id: 11, year: "1896", title: "Tom Sawyer, Detective", firstLine: "WELL, it was the next spring after me and Tom Sawyer set our old nigger Jim free, the time he was chained up for a runaway slave down there onTom’s uncle Silas’s farm in Arkansaw." },
			{ id: 12, year: "1904", title: "Extract's From Adam's Diary", firstLine: "This new creature with the long hair is a good deal in the way." },
			{ id: 13, year: "1906", title: "Eve's Diary", firstLine: "I am almost a whole day old, now.  I arrived yesterday. That is as it seems to me." },
			{ id: 14, year: "1869", title: "The Innocents Abroad", firstLine: "For months the great pleasure excursion to Europe and the Holy Land was chatted about in the newspapers everywhere in America and discussed at countless firesides." },
			{ id: 15, year: "1872", title: "Roughing It", firstLine: "My brother had just been appointed Secretary of Nevada Territory--an office of such majesty that it concentrated in itself the duties and dignities of Treasurer, Comptroller, Secretary of State, and Acting Governor in the Governor’s absence."},
			{ id: 16, year: "1876", title: "Old Times on the Upper Mississippi", firstLine: "The majesty and glory of the Great River have departed; its glamour remains, fresh and undying, in the memories of those who, with mind's eye, still can see it as it was a half-century ago." },
			{ id: 17, year: "1880", title: "A Tramp Abroad", firstLine: "One day it occurred to me that it had been many years since the world had been afforded the spectacle of a man adventurous enough to undertakea journey through Europe on foot." },
			{ id: 18, year: "1883", title: "Life on the Mississippi", firstLine: "THE Mississippi is well worth reading about. It is not a commonplaceriver, but on the contrary is in all ways remarkable." },
			{ id: 19, year: "1897", title: "Following the Equator", firstLine: "The starting point of this lecturing-trip around the world was Paris, where we had been living a year or two." }
		],
	all: function() { return this.books},
	get: function(id) {
		console.log("get: ", id);
		const isBook = p => p.id === id
		return this.books.find(isBook)
	}
}

export default BookData;
