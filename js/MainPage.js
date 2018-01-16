/*//////////////////////////////////////////////////////////
////////////////// Set up the Data /////////////////////////
//////////////////////////////////////////////////////////*/

var Data = [
		{nimi: "BodyPump", arv: 223},
		{nimi: "BodyAttack", arv: 117},
		{nimi: "MyFit abs", arv: 104},
		{nimi: "Nike Training Club", arv: 95},
		{nimi: "Muu", arv: 90}];

var Data2 = [
		{nimi: "Lene BodyPump", arv: 124},
		{nimi: "Lene teised trennid", arv: 19},
		{nimi: "Jõusaal", arv: 42},
		{nimi: "Muud trennid", arv: 28}];

/*//////////////////////////////////////////////////////////
/////////////// Initiate Donut Diagram /////////////////////
//////////////////////////////////////////////////////////*/

var margin = {top: 20, right: 25, bottom: 20, left: 25},
	width = 700 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
    .attr("transform", "translate(" + (margin.left + width / 2) + "," + (margin.top + height / 2) + ")");

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) { return d.arv; });

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
	.cornerRadius(3)
	.padAngle(0.015);

var g = svg.selectAll(".arc")
        .data(pie(Data))
      .enter().append("g")
        .attr("class", "arc");
	
g.append("svg:path")
	  .attr("class", "arc")
	  .attr("d", arc)
	  .style("opacity", 0)
	  .transition().duration(1000)
	  .style("opacity", 1)
	  .style("fill", "#C4C4C4");
	  
var g2 = svg.selectAll(".arc2")
        .data(pie(Data2))
      .enter().append("g")
        .attr("class", "arc2");
	
g2.append("svg:path")
	  .attr("class", "arc2")
	  .attr("d", arc)
	  .style("opacity", 0)
	  .style("fill", "#C4C4C4");

/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/
/*Initiate variables for bar*/
var progressColor = ["#D1D1D1","#949494"],
	progressClass = ["prgsBehind","prgsFront"],
	prgsWidth = 0.4*650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3*prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function(d,i) {return progressClass[i];})
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) {return d;})
	.attr("height", prgsHeight)
	.attr("fill", function(d,i) {return progressColor[i];});

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/
/*Create wrapper for center text*/
var textCenter = svg.append("g")
					.attr("class", "explanationWrapper");

/*Starting text middle top*/
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -24*10/2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text("Hei, Lene!")
	.call(wrap, 350);

/*Starting text middle bottom*/
var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 24*3/2 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
	.text("Ilusat jõuluaega!")
	.call(wrap, 350);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 1,
	buttonTexts = ["Jah, on küll.","Edasi","Jätka","Seega...","Lahe!"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Reload page*/
d3.select("#reset")
	.on("click", function(e) {location.reload();});

/*Skip to final visual right away*/
d3.select("#skip")
	.on("click", finalChord);
	
/*Order of steps when clicking button*/
d3.select("#clicker")      
	.on("click", function(e){
	
		//Introduction
		if(counter == 1) Draw1();
		//Color Arc of BodyPump
		else if(counter == 2) Draw2();
		//Color the other arcs as well
		else if(counter == 3) Draw3();
		//Show our stats.
		else if(counter == 4) Draw4();
		//Our Favorite
		else if(counter == 5) Draw5();
		//Final Page
		else if(counter == 6) finalChord();
		
		counter = counter + 1;
	});

