function AddKorean(word, grammar, meaning, level, author) {
	this.word = word;
	this.grmm = grammar;
	this.meaning = meaning;
	this.lvl = level;
	this.author = author;
}

function AddEnglish(word, grammar, meaning, level, author) {
	this.word = word;
	this.grmm = grammar;
	this.meaning = meaning;
	this.lvl = level;
	this.author = author;
}


var koreanBank = [
	{
		word: "하다",
		grmm: "동사(verb)",
		meaning: "to do",
		lvl: 1,
		author: "admin"
	},
	{
		word: "자다",
		grmm: "동사(verb)",
		meaning: "to sleep",
		lvl: 1,
		author: "admin"
	},
	{
		word: "먹다",
		grmm: "동사(verb)",
		meaning: "to eat",
		lvl: 1,
		author: "admin"
	},
	{
		word: "사다",
		grmm: "동사(verb)",
		meaning: "to buy",
		lvl: 1,
		author: "admin"
	},
	{
		word: "팔다",
		grmm: "동사(verb)",
		meaning: "to sell",
		lvl: 1,
		author: "admin"
	},
	{
		word: "열다",
		grmm: "동사(verb)",
		meaning: "to open",
		lvl: 1,
		author: "admin"
	},
	{
		word: "닫다",
		grmm: "동사(verb)",
		meaning: "to close",
		lvl: 1,
		author: "admin"
	},
	{
		word: "씻다",
		grmm: "동사(verb)",
		meaning: "to wash",
		lvl: 1,
		author: "admin"
	},
	{
		word: "부르다",
		grmm: "동사(verb)",
		meaning: "to call (someone) or to sing (a song)",
		lvl: 1,
		author: "admin"
	},
	{
		word: "마시다",
		grmm: "동사(verb)",
		meaning: "to drink",
		lvl: 1,
		author: "admin"
	},
	{
		word: "벗다",
		grmm: "동사(verb)",
		meaning: "to take off (clothes)",
		lvl: 1,
		author: "admin"
	},
	{
		word: "입다",
		grmm: "동사(verb)",
		meaning: "to put on (clothes)",
		lvl: 1,
		author: "admin"
	},
	{
		word: "버리다",
		grmm: "동사(verb)",
		meaning: "to throw away or to abandon",
		lvl: 1,
		author: "admin"
	},
	{
		word: "일어나다",
		grmm: "동사(verb)",
		meaning: "to wake up",
		lvl: 1,
		author: "admin"
	},
	{
		word: "공부하다",
		grmm: "동사(verb)",
		meaning: "to study",
		lvl: 1,
		author: "admin"
	},
	{
		word: "보다",
		grmm: "동사(verb)",
		meaning: "to see, to watch, or to look",
		lvl: 1,
		author: "admin"
	},
];


// var grmmArr = ["명사(noun)", "대명사(pronoun)", "동사(verb)",  "형용사(adjective)", "부사(adverb)", "전치사(proposition)", "접속사(conjuction)", "감탄사(interjection)"];