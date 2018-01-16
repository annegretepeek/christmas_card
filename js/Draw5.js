/*//////////////////////////////////////////////////////////////////////////*/
//Our favorite
/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	d3.selectAll(".arc2")
		.style("opacity", 0);
	/*Show and run the progressBar*/
	runProgressBar(time=700*8);	
	
	/*Texts*/
	changeTopText(newText = "SA OLED MEIE LEMMIK!",
		loc = 4/2, delayDisappear = 0, delayAppear = 1);
			changeTopText(newText = "SA OLED MEIE LEMMIK!",
		loc = 4/2, delayDisappear = 8, delayAppear = 8, finalText = true);
	changeBottomText(newText = "Ja sa meeldid ka teistele.",
		loc = 1/2, delayDisappear = 0, delayAppear = 3.5);
	changeBottomText(newText = "Sportlased on käinud 10 832 korda sinu juures.",
		loc = 1/2, delayDisappear = 7, delayAppear = 8);
		
	d3.select("#chart")
		.transition().delay(700)
		.style("background-size", "contain")
		.style("background", " linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.8) 100%), url('img/heart.jpg') no-repeat center");
		
};/*Draw5*/