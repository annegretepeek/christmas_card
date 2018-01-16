/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
		
	/*Show and run the progressBar*/
	runProgressBar(time=700*9);
		
	changeTopText(newText = "Me tahame soovida sulle ilusat jõuluaega ja väga mõnusat järgmist aastat.",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "See aasta on olnud äärmiselt lahe.",
	loc = 8/2, delayDisappear = 7, delayAppear = 8, finalText = true);
	
	changeBottomText(newText = "Me ütleks ka, et 2017. aasta on olnud päris trennirohke. On ju?",
	loc = 1/2, delayDisappear = 0, delayAppear = 8);

};/*Draw1*/