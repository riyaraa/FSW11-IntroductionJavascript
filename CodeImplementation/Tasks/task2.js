const inputWords = "Saya belajar javascript";
const changeWords = inputWords.split(" ").reverse().join(" ");
changeWords.length > 0 && inputWords !== " "
	? console.log(changeWords)
	: console.log("Silahkan masukan input kalimat...");
