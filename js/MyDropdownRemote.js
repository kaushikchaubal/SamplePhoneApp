	
function loadAreas() {
	$.getJSON("http://sampleappserver.herokuapp.com/getName", function(data) {
		$.each(data, function(key, val) {
			$("#nameSelector")
			.append($("<option></option>")
				.attr("value",key)
				.text(val.name)); 
		});
	});
}