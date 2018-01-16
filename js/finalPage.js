/*///////////////////////////////////////////////////////////
//Last page
///////////////////////////////////////////////////////////*/
function finalChord() {
	
	/*Remove button*/
	d3.select("#clicker")
		.style("visibility", "hidden");
	d3.select("#skip")
		.style("visibility", "hidden");
	d3.select("#progress")
		.style("visibility", "hidden");
	
	d3.selectAll(".arc")
		.style("opacity", 0);	
	d3.selectAll(".arc2")
		.style("opacity", 0);
	
	changeTopText(newText = "Aitäh sulle vägeva spordiaasta eest!",
		loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	changeBottomText(newText = "Mõnusat aastalõppu!",
		loc = 1/2, delayDisappear = 0, delayAppear = 3);	
	
	svg.append("text")
		.attr("text-anchor", "end")
		.attr("x", "150px")
		.attr("y", "100px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.style("font-size", "14px")
		.text("Henri & Annegrete")
		.transition().delay(2100).duration(1000)
		.attr("opacity", 1);
	
	d3.select("#chart")
		.transition().delay(700)
		.style("background-size", "contain")
		.style("background", " linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.8) 100%), url('img/pexels-photo.jpeg') no-repeat center");

};/*finalChord*/