/*//////////////////////////////////////////////////////////	
//Show Arc of BodyPump
//////////////////////////////////////////////////////////*/
function Draw2(){ 

	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);
				
var color = d3.scale.ordinal()
    .range(["#69B40F","#C4C4C4","#C4C4C4","#C4C4C4","#C4C4C4"]);
	
	d3.selectAll(".arc")
		.transition().delay(2500).duration(100)
		.style("fill", function(d) { return color(d.data.nimi); });
		
	g.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "start")
		.attr("x", "220px")
		.attr("y", "-150px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("BodyPump (223 trenni)")
		.transition().delay(2500).duration(1000)
		.attr("opacity", 1);
	  
	/*Switch  text*/
	runProgressBar(time=300*11);
	changeTopText(newText = "Sa oled andnud sel aastal 629 trenni, millest",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "Sa oled andnud sel aastal 629 trenni, millest",
	loc = 4/2, delayDisappear = 3.5, delayAppear = 3.5, finalText = true);
	
	changeBottomText(newText = "35% on BodyPump.",
	loc = 1/2, delayDisappear = 0, delayAppear = 3.5);
	
};/*Draw2*/

