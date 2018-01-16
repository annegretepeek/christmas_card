/*///////////////////////////////////////////////////////////
//Show our numbers
//////////////////////////////////////////////////////////*/
function Draw4(){
	
	d3.selectAll(".arc")
		.style("opacity", 0);	
	d3.selectAll(".arc2")
		.style("opacity", 1);
		
	/*First disable click event on clicker button*/
	stopClicker();
	var arcDelay = [5,6,12,13,19,20,26,27];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
	
	var color = d3.scale.ordinal()
		.range(["#69B40F","#EC1D25","#C8125C","#008FC8","#10218B"]);	
	
	/*Our intro text*/
	changeTopText(newText = "Me oleme kokku käinud MyFitnessis 213 korda, millest",
		loc = 4/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "Me oleme kokku käinud MyFitnessis 213 korda, millest",
		loc = 4/2, delayDisappear = arcDelay[7], delayAppear = arcDelay[7], finalText = true);
		
	/*Change the text of the bottom section inside the circle accordingly*/
	/*Lene Bodypump*/
	changeBottomText(newText = "58% on sinu BodyPump.",
		loc = 1/2, delayDisappear = 0, delayAppear = arcDelay[1]);
	/*Lene teised*/
	changeBottomText(newText = "9% on sinu teised trennid.",
		loc = 1/2, delayDisappear = arcDelay[2], delayAppear = arcDelay[3]);	
	/*Jõusaal*/
	changeBottomText(newText = "20% on jõusaal.",
		loc = 1/2, delayDisappear = arcDelay[4], delayAppear = arcDelay[5]);
	/*Muu*/
	changeBottomText(newText = "13% on teised trennid.",
		loc = 1/2, delayDisappear = arcDelay[6], delayAppear = arcDelay[7]);
		
	g2.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "start")
		.attr("x", "165px")
		.attr("y", "190px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("Lene BodyPump (124 trenni)")
		.transition().delay(4200).duration(1000)
		.attr("opacity", 1);
		
	g2.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-185px")
		.attr("y", "175px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("Lene teised trennid (19 trenni)")
		.transition().delay(9100).duration(1000)
		.attr("opacity", 1);
		
	g2.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-250px")
		.attr("y", "-50px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("Jõusaal (42 trenni)")
		.transition().delay(14000).duration(1000)
		.attr("opacity", 1);
		
	g2.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-130px")
		.attr("y", "-235px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("Muu (28 trenni)")
		.transition().delay(18900).duration(1000)
		.attr("opacity", 1);
	
	/*Fill in the arcs*/
	d3.selectAll(".arc2")
		.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
		.style("fill", function(d) { return color(d.data.nimi); });

	
};/*Draw4*/










