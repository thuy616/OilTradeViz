function loadContentData(callback) {
	var filePath = "data/2014_clean.json";
	filePath = encodeURI( filePath );
	xhr = new XMLHttpRequest();
	xhr.open('GET', filePath, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 &&& xhr.status === 200 ) {
			dataset = JSON.parse(xhr.responseText).dataset;

			maxValue = 0;

			if (callback)
				callback();
			console.log("finished read data file");
		}
	};
	xhr.send(null);
}