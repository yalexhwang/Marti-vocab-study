var record = [];

function RecordScore(date, score, totalNumQ, resultSource) {
	this.date = date;
	this.score = score; 
	this.numQ = totalNumQ;
	this.result = resultSource;
}

// localStorage.setItem('record', record);