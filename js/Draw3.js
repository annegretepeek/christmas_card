/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,0.5,1,2,8,9,15,16,22,23];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
	
	var color = d3.scale.ordinal()
		.range(["#69B40F","#EC1D25","#C8125C","#008FC8","#10218B"]);
	
   /*Fill in the other arcs*/
   d3.selectAll(".arc")
		.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
		.style("fill", function(d) { return color(d.data.nimi); });
	
	g.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "start")
		.attr("x", "100px")
		.attr("y", "240px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("BodyAttack (117 trenni)")
		.transition().delay(1400).duration(1000)
		.attr("opacity", 1);
		
	g.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-180px")
		.attr("y", "180px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("MyFit abs (104 trenni)")
		.transition().delay(6300).duration(1000)
		.attr("opacity", 1);
		
	g.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-255px")
		.attr("y", "-50px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("NTC (95 trenni)")
		.transition().delay(11200).duration(1000)
		.attr("opacity", 1);
		
	g.append("text")
		.attr("class", "nametext")
		.attr("text-anchor", "end")
		.attr("x", "-145px")
		.attr("y", "-230px")
		.attr("dy", "1em")
		.attr("opacity", 0)	
		.text("Muu (90 trenni)")
		.transition().delay(16100).duration(1000)
		.attr("opacity", 1);
 
	/*Change the text of the bottom section inside the circle accordingly*/
	/*BodyAttac*/
	changeBottomText(newText = "19% on BodyAttack.",
		loc = 1/2, delayDisappear = 0, delayAppear = arcDelay[3]);
	/*MyFit abs*/
	changeBottomText(newText = "17% on MyFit abs.",
		loc = 1/2, delayDisappear = arcDelay[4], delayAppear = arcDelay[5]);	
	/*NTC*/
	changeBottomText(newText = "15% on Nike Training Club.",
		loc = 1/2, delayDisappear = arcDelay[6], delayAppear = arcDelay[7]);
	/*Other*/
	changeBottomText(newText = "14% on kõik muu.",
		loc = 1/2, delayDisappear = arcDelay[8], delayAppear = arcDelay[9]);	
	 	
	changeTopText(newText = "Sa oled andnud sel aastal 629 trenni, millest",
		loc = 4/2, delayDisappear = arcDelay[9], delayAppear = arcDelay[9], finalText = true);

};/*Draw3*/