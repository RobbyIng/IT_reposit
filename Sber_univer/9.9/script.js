const sentence = "sdkjhfsdkf sdkfhskdf sdfhs sdfsph pjtprm";
let listWord = [];
nextWord = '';

for (item = 0; item < sentence.length; item++){
	if (sentence[item] !== " ") nextWord += sentence[item];
	else {
		listWord.push(nextWord);
		nextWord = '';
	}
    if (item === sentence.length-1) listWord.push(nextWord);
}
console.log(listWord);